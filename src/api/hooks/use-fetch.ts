import { useCallback, useState } from "react";

import {
	DeleteRequest,
	GetRequest,
	PostRequest,
	PutRequest,
} from "../types/fetch";

const useFetch = (baseUrl = import.meta.env.VITE_API_URL) => {
	const [loading, setLoading] = useState(true);
	const get: GetRequest = useCallback(
		(url: string) => {
			return new Promise((resolve, reject) => {
				fetch(baseUrl + url)
					.then((response) => response.json())
					.then((data) => {
						if (!data) {
							setLoading(false);
							return reject(data);
						}
						setLoading(false);
						return resolve(data);
					})
					.catch((error) => {
						setLoading(false);
						reject(error);
					});
			});
		},
		[baseUrl]
	);

	const post: PostRequest = useCallback(
		(url, body, token) => {
			return new Promise((resolve, reject) => {
				fetch(baseUrl + url, {
					body: JSON.stringify(body),
					headers: {
						authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
					method: "post",
				})
					.then((response) => response.json())
					.then((data) => {
						if (!data) {
							setLoading(false);
							return reject(data);
						}
						setLoading(false);
						return resolve(data);
					})
					.catch((error) => {
						setLoading(false);
						reject(error);
					});
			});
		},
		[baseUrl]
	);
	const put: PutRequest = useCallback(
		(url: string, body: Body) => {
			return new Promise((resolve, reject) => {
				fetch(baseUrl + url, {
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json",
					},
					method: "put",
				})
					.then((response) => response.json())
					.then((data) => {
						if (!data) {
							setLoading(false);
							return reject(data);
						}
						setLoading(false);
						return resolve(data);
					})
					.catch((error) => {
						setLoading(false);
						reject(error);
					});
			});
		},
		[baseUrl]
	);
	const deleteRequest: DeleteRequest = useCallback(
		(url, body, token) => {
			return new Promise((resolve, reject) => {
				fetch(baseUrl + url, {
					body: JSON.stringify(body),
					headers: {
						authorization: `Bearer ${token}`,
					},
					method: "delete",
				})
					.then((response) => response.json())
					.then((data) => {
						if (!data) {
							setLoading(false);
							return reject(data);
						}
						setLoading(false);
						return resolve(data);
					})
					.catch((error) => {
						setLoading(false);
						reject(error);
					});
			});
		},
		[baseUrl]
	);

	return {
		deleteRequest,
		get,
		post,
		put,

		loading,
	};
};
export default useFetch;
