import { useGetPost } from "@/hooks/api/use-fetch-api/use-fetch-api";
import CommentsList from "@/widgets/comments-list/comments-list";
import Post from "@/widgets/post/post";
import PostSkeleton from "@/widgets/post/post-skeleton";
import { useParams } from "react-router-dom";

const PostPage = () => {
	const { postId } = useParams();
	if (!postId) {
		throw new Error("Post id is undefined.");
	}
	if (typeof +postId === "string") {
		throw new TypeError("Post id must be a number");
	}
	const [data, loading, error] = useGetPost(postId);
	if (error) {
		throw new Error(error.toString());
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
					<CommentsList
						initialComments={data.comments}
						postId={postId}
						totalComments={data._count.comments}
					/>
				</>
			) : (
				<PostSkeleton />
			)}
		</article>
	);
};
export default PostPage;
