import { useGetPosts } from "@/api/hooks/use-fetch-api/use-fetch-api";
import { PostsType } from "@/api/types/api-data";
import useScroll from "@/hooks/use-scroll";
import { useEffect, useRef, useState } from "react";

import PostCard from "./post-card/post-card";
import PostCardSkeleton from "./post-card/post-card-skeleton";

const PostsList = () => {
	const [posts, setPosts] = useState<PostsType | undefined>(undefined);
	const [page, setPage] = useState<number>(1);
	const [postsData, loading, error] = useGetPosts(3, page);
	const scrollLoadRef = useRef<HTMLDivElement>(null);
	const loadMorePosts = () => {
		if (!loading && postsData?.meta.nextPage) {
			setPage((p) => p + 1);
		}
	};
	useScroll(loadMorePosts, scrollLoadRef);

	useEffect(() => {
		if (postsData?.posts) {
			setPosts((prevPosts) => ({
				meta: postsData.meta,
				posts: [...(prevPosts?.posts ?? []), ...postsData.posts],
			}));
		}
	}, [postsData]);
	if (error) {
		console.error(error);
	}
	return (
		<section className="container mb-4 mt-12 grid grid-rows-none gap-4 sm:grid-cols-1 lg:grid-cols-3">
			{posts?.posts
				? posts.posts.map((post) => {
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
				: Array.from({ length: 3 }).map(
						// Initial fetch of 3 posts.
						(element, index) => <PostCardSkeleton key={index} /> // eslint-disable-line sonarjs/no-array-index-key
					)}

			{posts?.meta.nextPage && (
				<>
					<div>
						<div ref={scrollLoadRef}></div>
						<PostCardSkeleton />
					</div>
					<PostCardSkeleton />
					<PostCardSkeleton />
				</>
			)}
			{posts?.meta.nextPage === null && loading === false && (
				<>
					<br />
					<div className="mx-auto">End</div>
				</>
			)}
		</section>
	);
};

export default PostsList;
