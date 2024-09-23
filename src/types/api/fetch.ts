import { CommentsType, PostByIdType, PostsType, UserType } from "./api-data";

export type HttpMethod = "get" | "post" | "put" | "delete";

export type UseFetchType<T> = (
	endpoint: string,
	body?: object | string,
	headers?: object,
	method?: HttpMethod,
	baseUrl?: string
) => UseFetchResponseType<T>;

export type fetchWrapperType<T> = (
	endpoint: string,
	body?: object | string,
	headers?: object,
	method?: HttpMethod,
	baseUrl?: string
) => Promise<T>;

export type UseFetchResponseType<T> = [
	data: T | undefined,
	loading: boolean,
	error: Error | undefined,
];

export type GetAllPostsType = PostsType | undefined;
export type GetPostByIdType = PostByIdType | undefined;
export type GetPostCommentsType = CommentsType | undefined;
export type GetUsersType = UserType[] | undefined;
