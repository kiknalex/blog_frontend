import { CommentsType, PostByIdType, PostsType, UserType } from "./api-data";

export type HttpMethod = "get" | "post" | "put" | "delete";

export type UseFetchType<T> = (
	endpoint: string,
	headers?: HeadersInit,
	body?: object | string,
	method?: HttpMethod,
	baseUrl?: string
) => UseFetchResponseType<T>;

export type UseFetchResponseType<T> = [
	data: T | undefined,
	loading: boolean,
	error: Error | undefined,
];

type LoginSuccessType = { token: string; userId: number; username: string };
type LoginErrorType = { message: string };
export type IsLoginSuccessType = LoginSuccessType | LoginErrorType;

export const isSuccessType = (
	response: IsLoginSuccessType
): response is LoginSuccessType => {
	return (response as LoginSuccessType).token !== undefined;
};

export type GetAllPostsType = PostsType | undefined;
export type GetPostByIdType = PostByIdType | undefined;
export type GetPostCommentsType = CommentsType | undefined;
export type GetUsersType = UserType[] | undefined;

export type ValidationErrorType = {
	field: string;
	message: string;
};
