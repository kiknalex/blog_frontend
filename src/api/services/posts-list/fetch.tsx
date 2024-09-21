import { PostsType } from "@/api/types/api-data";

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchInitialPosts = async (
	limit: number
): Promise<PostsType | undefined> => {
	try {
		const response = await fetch(`${BASE_URL}/posts?limit=${limit}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const fetchOnScrollPosts = async (
	limit: number,
	page: number
): Promise<PostsType | undefined> => {
	try {
		const response = await fetch(
			`${BASE_URL}/posts?limit=${limit}&page=${page}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};
