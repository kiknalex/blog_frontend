import { Post, PostDetailed, User } from "./api-data";

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

export type GetAllPosts = () => Promise<PostDetailed[] | undefined>;
export type GetPost = (postId: number) => Promise<Post | undefined>;
export type GetPostComments = (
	postId: number
) => Promise<Comment[] | undefined>;
export type GetUsers = () => Promise<User[] | undefined>;
