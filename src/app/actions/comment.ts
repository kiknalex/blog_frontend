import { Headers } from "@/types/api/fetch";
import { isLoggedIn } from "@/utils/auth";
import fetchWrapper from "@/utils/fetch-wrapper";
import { ActionFunction } from "react-router-dom";

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
