import { isSuccessType } from "@/types/api/fetch";
import fetchWrapper from "@/utils/fetch-wrapper";
import { isLoggedIn } from "@/utils/is-logged-in";
import { ActionFunction } from "react-router-dom";

type Headers = {
	Authorization?: string;
	"Content-Type": string;
};

export const addComment: ActionFunction = async ({ request, params }) => {
	if (request.method === "POST") {
		const { postId } = params;
		const formData = await request.formData();
		const content = formData.get("content");
		const body = { content };
		const anon = isLoggedIn() ? "" : "?anon=true";
		let headers: Headers = {
			"Content-Type": "application/json",
		};
		if (isLoggedIn()) {
			const token = JSON.parse(localStorage.getItem("session-token")!);
			headers = {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token.token}`,
			};
		}

		const data = await fetchWrapper(
			`/posts/${postId}/comments${anon}`,
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
		const currentDate = new Date();
		const expiresAt = currentDate.setTime(
			currentDate.getTime() + 60 * 60 * 1000
		);
		localStorage.setItem(
			"session-token",
			JSON.stringify({ token: response.token, expiresAt })
		);
		return { ok: true };
	} else {
		return { ok: false, ...response };
	}
};
