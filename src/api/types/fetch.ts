import {
	CommentType,
	PostByIdType,
	PostDetailedType,
	UserType,
} from "./api-data";

export type GetRequest = (url: string) => Promise<unknown>;
export type PostRequest = (
	url: string,
	body: Body,
	token?: string
) => Promise<unknown>;
export type PutRequest = (
	url: string,
	body: Body,
	token?: string
) => Promise<unknown>;
export type DeleteRequest = (
	url: string,
	body: Body,
	token?: string
) => Promise<unknown>;

export type GetAllPosts = () => Promise<PostDetailedType[] | undefined>;
export type GetPostById = (postId: number) => Promise<PostByIdType | undefined>;
export type GetPostComments = (
	postId: number
) => Promise<CommentType[] | undefined>;
export type GetUsers = () => Promise<UserType[] | undefined>;
