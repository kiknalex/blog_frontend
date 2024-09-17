import {
	CommentType,
	PostByIdType,
	PostDetailedType,
	UserType,
} from "@/api/types/api-data";
import {
	GetAllPosts,
	GetPostById,
	GetPostComments,
	GetUsers,
} from "@/api/types/fetch";
import { useCallback, useState } from "react";

import fetchWrapped from "../../utils/fetch-wrapped";

const useFetchGet = () => {
	const [loading, setLoading] = useState(true);
	const { get } = fetchWrapped();

	const getAllPosts: GetAllPosts = useCallback(async () => {
		try {
			return (await get("/posts")) as PostDetailedType[];
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}, [get]);
	const getPost: GetPostById = useCallback(
		async (postId: number) => {
			try {
				return (await get(`/posts/${postId}`)) as PostByIdType;
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		},
		[get]
	);
	const getPostComments: GetPostComments = useCallback(
		async (postId: number) => {
			try {
				return (await get(`/posts/${postId}/comments`)) as CommentType[];
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		},
		[get]
	);
	const getUsers: GetUsers = useCallback(async () => {
		try {
			return (await get("/users")) as UserType[];
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
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

export default useFetchGet;
