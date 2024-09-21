import { ComponentState, useEffect, useState } from "react";

import { UseFetchType } from "../types/fetch";

const useFetch: UseFetchType<ComponentState> = (
	endpoint,
	body,
	headers,
	method = "get",
	baseUrl = import.meta.env.VITE_API_URL
) => {
	const [data, setData] = useState(undefined);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(undefined);

	useEffect(() => {
		let ignore = false;
		const fetchData = async () => {
			setLoading(true);
			let options = {};
			if (method !== "get") {
				options = {
					body: JSON.stringify(body),
					headers: { "Content-Type": "application/json", ...headers },
					method,
				};
			}
			await fetch(baseUrl + endpoint, options)
				.then((response) => response.json())
				.then((data) => {
					// eslint-disable-next-line promise/always-return
					if (!ignore) {
						setData(data);
					}
				})
				.catch((error) => {
					console.error(error);
					setError(error);
				})
				.finally(() => setLoading(false));
		};
		fetchData();
		return () => {
			ignore = true;
		};
	}, [baseUrl, body, headers, method, endpoint]);
	return [data, loading, error];
};
export default useFetch;
