import useFetchGet from "@/api/hooks/use-fetch-api/use-fetch-get";
import { PostByIdType } from "@/api/types/api-data";
import Post from "@/widgets/post/post";
import PostSkeleton from "@/widgets/post/post-skeleton";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostPage = () => {
	const [data, setData] = useState<PostByIdType | undefined>(undefined);
	const { postId } = useParams();
	const { getPost, loading } = useFetchGet();
	const navigate = useNavigate();
	if (!postId) {
		throw new Error("Post id is undefined.");
	}
	if (typeof +postId === "string") {
		throw new TypeError("Post id must be a number");
	}
	useEffect(() => {
		const fetchData = async () => {
			try {
				const newData = await getPost(+postId);
				if (newData) {
					setData(newData);
				}
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [getPost, postId, navigate]);
	return (
		<article className="container mt-12 h-auto max-w-5xl">
			{data && loading !== true ? (
				<Post
					author={data.author.username}
					content={data.content}
					date={data.date_posted}
					title={data.title}
				/>
			) : (
				<PostSkeleton />
			)}
			<div>comments</div>
		</article>
	);
};
export default PostPage;
