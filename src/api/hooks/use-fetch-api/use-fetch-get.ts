import { Post, PostDetailed, User } from "@/api/types/api-data";
import {
	GetAllPosts,
	GetPost,
	GetPostComments,
	GetUsers,
} from "@/api/types/fetch";
import { useCallback } from "react";

import useFetch from "../use-fetch";

const useFetchApi = () => {
	const {
		get,

		loading,
	} = useFetch();

	const getAllPosts: GetAllPosts = useCallback(async () => {
		try {
			return (await get("/posts")) as PostDetailed[];
		} catch (error) {
			console.error(error);
		}
	}, [get]);
	const getPost: GetPost = useCallback(
		async (postId: number) => {
			try {
				return (await get(`/posts/${postId}`)) as Post;
			} catch (error) {
				console.error(error);
			}
		},
		[get]
	);
	const getPostComments: GetPostComments = useCallback(
		async (postId: number) => {
			try {
				return (await get(`/posts/${postId}/comments`)) as Comment[];
			} catch (error) {
				console.error(error);
			}
		},
		[get]
	);
	const getUsers: GetUsers = useCallback(async () => {
		try {
			return (await get("/users")) as User[];
		} catch (error) {
			console.error(error);
		}
	}, [get]);
	return {
		getAllPosts,
		getPost,
		getPostComments,
		getUsers,

		loading,
	};
};

export default useFetchApi;
