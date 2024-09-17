import useFetchGet from "@/api/hooks/use-fetch-api/use-fetch-get";
import { PostDetailedType } from "@/api/types/api-data";
import { useEffect, useState } from "react";

import PostCard from "./post-card/post-card";
import PostCardSkeleton from "./post-card/post-card-skeleton";

const PostsList = () => {
	const [postsData, setPostsData] = useState<PostDetailedType[] | undefined>(
		undefined
	);
	const { getAllPosts, loading } = useFetchGet();

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
			{
				postsData && !loading
					? postsData.map((post) => {
							return (
								<PostCard
									id={post.id}
									author={post.author.username}
									commentsCount={post._count.comments}
									content={post.content}
									date={post.date_posted}
									title={post.title}
									key={post.id}
								/>
							);
						})
					: Array.from({ length: 3 }).map(() => <PostCardSkeleton />) // eslint-disable-line react/jsx-key
			}
		</section>
	);
};

export default PostsList;

/* {Array.from({ length: 5 }).map((el) => (
				<PostSkeleton /> */
