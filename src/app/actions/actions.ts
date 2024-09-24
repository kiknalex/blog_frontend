import fetchWrapper from "@/api/services/fetch-wrapper";
import { isSuccessType } from "@/types/api/fetch";
import { ActionFunction } from "react-router-dom";

export const addComment: ActionFunction = async ({ request, params }) => {
	if (request.method === "POST") {
		const { postId } = params;
		const formData = await request.formData();
		const content = formData.get("content");
		const body = { content };
		const headers = {
			"Content-Type": "application/json",
		};

		const data = await fetchWrapper(
			`/posts/${postId}/comments?anon=true`,
			body,
			headers,
			"post"
		);
		return data;
	}
};

export const login: ActionFunction<{ token: string }> = async ({ request }) => {
	if (request.method !== "POST") {
		throw new Error("Login request method must be POST.");
	}
	const formData = await request.formData();
	const username = formData.get("username");
	const password = formData.get("password");

	const body = { username, password };
	const headers = {
		"Content-Type": "application/json",
	};

	const response = await fetchWrapper(`/users/login`, body, headers, "post");
	if (isSuccessType(response)) {
		localStorage.setItem("session-token", JSON.stringify(response.token));
		return { ok: true };
	} else {
		return { ok: false, ...response };
	}
};
