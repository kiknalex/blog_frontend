export interface User {
	id: number;
	role: "ADMIN" | "USER";
	username: string;
}
export interface Post {
	id: number;
	content: string;
	date_posted: string;
	published: boolean;
	title: string;
}
export interface Comment {
	id: number;
	content: string;
	date_posted: string;
	authorId: number;
	postId: number;
}
export interface PostDetailed extends Post {
	_count: {
		comments: number;
	};
	author: {
		username: string;
	};
}
