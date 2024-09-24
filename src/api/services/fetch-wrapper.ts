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
	const data = await response.json();
	return data;
};
export default fetchWrapper;
