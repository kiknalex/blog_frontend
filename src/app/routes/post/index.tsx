import useFetchGet from "@/api/hooks/use-fetch-api/use-fetch-get";
import { PostByIdType } from "@/api/types/api-data";
import useFetch from "@/api/utils/use-fetch";
import CommentsList from "@/widgets/comments-list/comments-list";
import Post from "@/widgets/post/post";
import PostSkeleton from "@/widgets/post/post-skeleton";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostPage = () => {
	// const [data, setData] = useState<PostByIdType | undefined>(undefined);
	const { postId } = useParams();
	const { data, error, loading } = useFetch("/post/" + postId);

	if (!postId) {
		throw new Error("Post id is undefined.");
	}
	if (typeof +postId === "string") {
		throw new TypeError("Post id must be a number");
	}

	return (
		<article className="container mt-12 h-auto max-w-5xl">
			{data && loading !== true ? (
				<>
					<Post
						author={data.author.username}
						content={data.content}
						date={data.date_posted}
						title={data.title}
					/>
					<CommentsList initialComments={data.comments} postId={postId} />
				</>
			) : (
				<PostSkeleton />
			)}
		</article>
	);
};
export default PostPage;
