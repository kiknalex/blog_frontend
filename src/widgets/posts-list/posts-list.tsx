import {
	fetchInitialPosts,
	fetchOnScrollPosts,
} from "@/api/services/posts-list/fetch";
import useScroll from "@/hooks/use-scroll";
import { GetAllPostsType } from "@/types/api/fetch";
import { useCallback, useEffect, useState } from "react";

import PostCard from "./post-card/post-card";
import PostCardSkeleton from "./post-card/post-card-skeleton";

const limit = 3;
const PostsList = () => {
	const [posts, setPosts] = useState<GetAllPostsType | undefined>(undefined);
	const [hasNextPage, setHasNextPage] = useState<boolean>(true);
	const [loading, setLoading] = useState<boolean>(false);
	const [page, setPage] = useState<number>(2);
	const fetchOnScroll = useCallback(async () => {
		if (loading && !hasNextPage) return;

		try {
			setLoading(true);
			const data = await fetchOnScrollPosts(limit, page);
			if (data) {
				setPosts((prevPosts) => {
					return {
						meta: data.meta,
						posts: [...(prevPosts?.posts ?? []), ...data.posts],
					};
				});
				if (data.meta.nextPage) {
					setPage((p) => p + 1);
				} else {
					setHasNextPage(false);
				}
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}, [loading, page, hasNextPage]);
	const scrollLoadRef = useScroll(fetchOnScroll);

	useEffect(() => {
		const fetchInitialData = async () => {
			try {
				const data = await fetchInitialPosts(limit);
				setPosts(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchInitialData();
	}, []);
	return (
		<section className="container mb-4 mt-12 grid grid-rows-none gap-4 sm:grid-cols-1 lg:grid-cols-3">
			{posts?.posts ? (
				posts.posts.map((post) => {
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
			) : (
				<>
					<PostCardSkeleton />
					<PostCardSkeleton />
					<PostCardSkeleton />
				</>
			)}

			{hasNextPage && posts && (
				<>
					<div>
						{loading === false && posts && <div ref={scrollLoadRef}></div>}
						<PostCardSkeleton />
					</div>
					<PostCardSkeleton />
					<PostCardSkeleton />
				</>
			)}
			{hasNextPage === false && (
				<>
					<br />
					<div className="mx-auto">End</div>
				</>
			)}
		</section>
	);
};

export default PostsList;
