import {
	GetAllPostsType,
	GetPostByIdType,
	GetPostCommentsType,
	GetUsersType,
	UseFetchResponseType,
} from "@/api/types/fetch";

import useFetch from "../../utils/use-fetch";

export const useGetPosts = (): UseFetchResponseType<GetAllPostsType> =>
	useFetch("/posts");

export const useGetPost = (
	postId: string
): UseFetchResponseType<GetPostByIdType> => useFetch(`/posts/${postId}`);

export const useGetPostComments = (
	postId: string
): UseFetchResponseType<GetPostCommentsType> =>
	useFetch(`/posts/${postId}/comments`);

export const useGetUsers = (): UseFetchResponseType<GetUsersType> =>
	useFetch(`/users`);
