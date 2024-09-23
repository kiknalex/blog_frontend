import fetchWrapper from "@/api/services/fetch-wrapper";
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
		try {
			await fetchWrapper(
				`/posts/${postId}/comments?anon=true`,
				body,
				headers,
				"post"
			);
			return { ok: true };
		} catch {
			return { ok: false };
		}
	}
};
