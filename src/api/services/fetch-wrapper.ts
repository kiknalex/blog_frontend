import { fetchWrapperType } from "../../types/api/fetch";

const fetchWrapper: fetchWrapperType<"Success!" | null> = async (
	endpoint,
	body,
	headers,
	method = "get",
	baseUrl = import.meta.env.VITE_API_URL
) => {
	let options = {};
	if (method !== "get" && body) {
		options = {
			body: JSON.stringify(body),
			headers: headers || { "Content-Type": "application/json" },
			method,
		};
	}
	try {
		const response = await fetch(baseUrl + endpoint, options);
		if (!response.ok) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}
		return await response.json();
	} catch (error) {
		throw new Error(String(error));
	}
};
export default fetchWrapper;
