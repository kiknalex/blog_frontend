export interface UserType {
	id: number;
	role: "ADMIN" | "USER";
	username: string;
}
export interface PostType {
	id: number;
	content: string;
	date_posted: string;
	published: boolean;
	title: string;
}
export interface CommentType {
	id: number;
	content: string;
	date_posted: string;
	authorId: number;
	postId: number;
}
export interface PostDetailedType extends PostType {
	_count: {
		comments: number;
	};
	author: {
		username: string;
	};
}
