export interface User {
	id: number;
	role: "ADMIN" | "USER";
	username: string;
}
export interface Post {
	id: number;
	content: string;
	date_posted: Date;
	published: boolean;
	title: string;
}
export interface Comment {
	id: number;
	content: string;
	date_posted: Date;
	authorId: number;
	postId: number;
}
export interface PostDetailed {
	author: {
		username: string;
	};
	comments: Comment[];
	post: Post;
}
