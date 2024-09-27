import { isSuccessType } from "@/types/api/fetch";
import { headersWithToken, isLoggedIn } from "@/utils/auth";
import fetchWrapper from "@/utils/fetch-wrapper";
import { isStatusOk } from "@/utils/is-status-ok";
import { ActionFunction } from "react-router-dom";

type Headers = {
	Authorization?: string;
	"Content-Type": string;
};

export const editPost: ActionFunction = async ({ request, params }) => {
	console.log(request.method);
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
	if (isSuccessType(response.data)) {
		const currentDate = new Date();
		const expiresAt = currentDate.setTime(
			currentDate.getTime() + 60 * 60 * 1000
		);

		localStorage.setItem(
			"session-token",
			JSON.stringify({
				token: response.data.token,
				expiresAt,
				username: response.data.username,
				userId: response.data.userId,
			})
		);
		return { ok: true };
	} else {
		return { ok: false, ...response.data };
	}
};

export const register: ActionFunction = async ({ request }) => {
	if (request.method !== "POST") {
		throw new Error("Register request method must be POST.");
	}
	const formData = await request.formData();
	const username = formData.get("username");
	const password = formData.get("new-password");
	const body = { username, password };
	const headers = {
		"Content-Type": "application/json",
	};

	const response = await fetchWrapper(`/users/register`, body, headers, "post");
	console.log(response.data);
	return { ok: isStatusOk(response.statusCode), data: response.data };
};
