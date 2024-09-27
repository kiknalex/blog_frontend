import { isSuccessType } from "@/types/api/fetch";
import fetchWrapper from "@/utils/fetch-wrapper";
import { isStatusOk } from "@/utils/is-status-ok";
import { ActionFunction } from "react-router-dom";

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
		setTimeout(
			() => {
				localStorage.removeItem("session-token");
			},
			60 * 60 * 1000
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
