import { CommentsType } from "@/types/api/api-data";
const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchOnScrollComments = async (
	postId: number,
	limit: number,
	page: number
): Promise<CommentsType | undefined> => {
	try {
		const response = await fetch(
			`${BASE_URL}/posts/${postId}/comments?limit=${limit}&page=${page}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const fetchLatestComment = async (
	postId: number
): Promise<CommentsType | undefined> => {
	try {
		const response = await fetch(
			`${BASE_URL}/posts/${postId}/comments?limit=1`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};
