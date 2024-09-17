import useFetchGet from "@/api/hooks/use-fetch-api/use-fetch-get";
import { PostDetailed } from "@/api/types/api-data";
import { useEffect, useState } from "react";

import Post from "./post/post";
import PostSkeleton from "./post/post-skeleton";

const PostsList = () => {
	const [postsData, setPostsData] = useState<PostDetailed[]>([]);
	const { getAllPosts } = useFetchGet();
	const loading = true;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getAllPosts();
				if (data) {
					setPostsData(data);
				}
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [getAllPosts]);
	return (
		<section className="container mb-4 mt-12 grid grid-cols-3 gap-4">
			{loading
				? Array.from({ length: 6 }).map(() => <PostSkeleton />)
				: postsData.map((post) => {
						return (
							<Post
								id={post.id}
								author={post.author.username}
								commentsCount={post._count.comments}
								content={post.content}
								date={post.date_posted}
								title={post.title}
								key={post.id}
							/>
						);
					})}
		</section>
	);
};

export default PostsList;

/* {Array.from({ length: 5 }).map((el) => (
				<PostSkeleton /> */
