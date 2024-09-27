import { ProfileType } from "@/types/api/api-data";
import {
	GetAllPostsType,
	GetPostByIdType,
	GetPostCommentsType,
	GetUsersType,
	UseFetchResponseType,
} from "@/types/api/fetch";
import { headersWithToken } from "@/utils/auth";
import { useMemo } from "react";

import useFetch from "../use-fetch";

export const useGetPosts = (
	limit?: number,
	page?: number
): UseFetchResponseType<GetAllPostsType> => {
	let query = "?";
	if (limit) {
		query += `limit=${limit}&`;
	}
	if (page) {
		query += `page=${page}&`;
	}
	if (query.length === 1) {
		query = "";
	}
	return useFetch("/posts" + query);
};
export const useGetPost = (
	postId: string
): UseFetchResponseType<GetPostByIdType> => useFetch(`/posts/${postId}`);

export const useGetPostComments = (
	postId: string,
	limit?: number,
	page?: number
): UseFetchResponseType<GetPostCommentsType> => {
	let query = "?";
	if (limit) {
		query += `limit=${limit}&`;
	}
	if (page) {
		query += `page=${page}&`;
	}
	if (query.length === 1) {
		query = "";
	}
	return useFetch(`/posts/${postId}/comments` + query);
};

export const useGetUsers = (): UseFetchResponseType<GetUsersType> =>
	useFetch(`/users`);

export const useGetProfile = (): UseFetchResponseType<ProfileType> => {
	const headers = useMemo(() => headersWithToken(), []);

	return useFetch("/profile", headers);
};
