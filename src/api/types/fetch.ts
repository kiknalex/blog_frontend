import {
	CommentType,
	PostByIdType,
	PostDetailedType,
	UserType,
} from "./api-data";

export type HttpMethod = "get" | "post" | "put" | "delete";

export type UseFetchType<T> = (
	endpoint: string,
	body?: object | string,
	headers?: object,
	method?: HttpMethod,
	baseUrl?: string
) => UseFetchResponseType<T>;

export type UseFetchResponseType<T> = [
	data: T,
	loading: boolean,
	error: Error | undefined,
];

export type GetAllPostsType = PostDetailedType[] | undefined;
export type GetPostByIdType = (
	postId: number
) => Promise<PostByIdType | undefined>;
export type GetPostCommentsType = (
	postId: number
) => Promise<CommentType[] | undefined>;
export type GetUsersType = () => Promise<UserType[] | undefined>;
