import { headersWithToken } from "@/utils/auth";
import fetchWrapper from "@/utils/fetch-wrapper";
import { ActionFunction, redirect } from "react-router-dom";

export const deletePost: ActionFunction = async ({ request, params }) => {
	if (request.method === "DELETE") {
		const { postId } = params;
		const headers = headersWithToken();
		await fetchWrapper(`/posts/${postId}`, {}, headers, "DELETE");
		return redirect("/");
	}
};

export const editPost: ActionFunction = async ({ request, params }) => {
	if (request.method === "PUT") {
		const { postId } = params;
		const formData = await request.formData();
		const content = formData.get("content");
		const body = { content };
		const headers = headersWithToken();
		const response = await fetchWrapper(
			`/posts/${postId}`,
			body,
			headers,
			"PUT"
		);
		return response.data;
	}
	return null; // eslint-disable-line unicorn/no-null
};
