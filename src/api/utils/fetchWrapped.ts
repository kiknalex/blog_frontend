import { useCallback } from "react";

import {
	DeleteRequest,
	GetRequest,
	PostRequest,
	PutRequest,
} from "../types/fetch";

const fetchWrapped = (baseUrl = import.meta.env.VITE_API_URL) => {
	const get: GetRequest = (url: string) => {
		return new Promise((resolve, reject) => {
			fetch(baseUrl + url)
				.then((response) => response.json())
				.then((data) => {
					if (!data) {
						return reject(data);
					}
					return resolve(data);
				})
				.catch((error) => {
					reject(error);
				});
		});
	};

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
							return reject(data);
						}
						return resolve(data);
					})
					.catch((error) => {
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
							return reject(data);
						}
						return resolve(data);
					})
					.catch((error) => {
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
							return reject(data);
						}
						return resolve(data);
					})
					.catch((error) => {
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
	};
};

export default fetchWrapped;
