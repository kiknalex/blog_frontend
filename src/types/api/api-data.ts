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
	author: {
		username: string;
	};
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

export interface PostByIdType extends PostType {
	author: {
		username: string;
	};
	comments: CommentType[];
	_count: {
		comments: number;
	};
}

export interface PostsType {
	posts: PostDetailedType[];
	meta: MetaType;
}
export interface CommentsType {
	comments: CommentType[];
	meta: MetaType;
}

interface MetaType {
	totalCount: number;
	currentPage: number;
	nextPage: number | null;
}

export interface ProfileType {
	id: number;
	username: string;
	role: "USER" | "ADMIN";
	posts: ProfilePostType[] | [];
	comments: ProfileCommentType[] | [];
}

export interface ProfilePostType {
	id: number;
	date_posted: string;
	title: string;
	content: string;
	published: boolean;
	_count: {
		comments: number;
	};
}

export interface ProfileCommentType {
	id: number;
	date_posted: string;
	content: string;
	postId: number;
}
