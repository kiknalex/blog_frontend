import { headersWithToken } from "@/utils/auth";
import fetchWrapper from "@/utils/fetch-wrapper";
import { ActionFunction, redirect } from "react-router-dom";

export const createPost: ActionFunction = async ({ request }) => {
	if (request.method === "POST") {
		const formData = await request.formData();
		const title = formData.get("title");
		const content = formData.get("content");
		const body = { title, content };
		const headers = headersWithToken();
		const response = await fetchWrapper(`/posts`, body, headers, "POST");
		console.log(response);
		return redirect(`/posts/${response.data.id}`);
	}
};

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
