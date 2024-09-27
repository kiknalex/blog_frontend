const fetchWrapper = async (
	endpoint: string,
	body?: object | string,
	headers?: HeadersInit,
	method: string = "get",
	baseUrl: string = import.meta.env.VITE_API_URL
) => {
	let options = {};
	if (method !== "get" && body) {
		options = {
			body: JSON.stringify(body),
			headers: headers || { "Content-Type": "application/json" },
			method,
		};
	}

	const response = await fetch(baseUrl + endpoint, options);
	const contentType = response.headers.get("content-type");

	const data = await (contentType && contentType.includes("application/json")
		? response.json()
		: response.text());
	return { statusCode: response.status, data };
};
export default fetchWrapper;
