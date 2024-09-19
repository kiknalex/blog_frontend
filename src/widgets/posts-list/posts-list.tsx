import { useGetPosts } from "@/api/hooks/use-fetch-api/use-fetch-api";

import PostCard from "./post-card/post-card";
import PostCardSkeleton from "./post-card/post-card-skeleton";

const PostsList = () => {
	const [postsData, loading, error] = useGetPosts();

	if (error) {
		console.error(error);
	}
	return (
		<section className="container mb-4 mt-12 grid grid-cols-3 gap-4">
			{
				postsData && !loading
					? postsData.posts.map((post) => {
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
