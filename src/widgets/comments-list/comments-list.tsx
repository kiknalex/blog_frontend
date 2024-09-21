import { fetchOnScrollComments } from "@/api/services/comments-list/fetch";
import { CommentsType, CommentType } from "@/api/types/api-data";
import LoadingSpinner from "@/components/loading-spinner/loading-spinner";
import AddComment from "@/features/add-comment/add-comment";
import useScroll from "@/hooks/use-scroll";
import { FunctionComponent, useCallback, useState } from "react";

import Comment from "./comment/comment";

interface Props {
	initialComments: CommentType[];
	postId: string;
	totalComments: number;
}
const limit = 6;
const CommentsList: FunctionComponent<Props> = ({
	initialComments,
	postId,
	totalComments,
}) => {
	const [commentsData, setCommentsData] = useState<
		{ comments: CommentType[] } | CommentsType | undefined
	>({ comments: initialComments });
	const [loading, setLoading] = useState<boolean>(false);
	const [hasNextPage, setHasNextPage] = useState<boolean>(true);
	const [page, setPage] = useState<number>(2);
	const fetchData = useCallback(async () => {
		if (loading && !hasNextPage) return;
		try {
			setLoading(true);
			const data = await fetchOnScrollComments(+postId, limit, page);
			if (data) {
				setCommentsData((prevComments) => {
					return {
						meta: data.meta,
						comments: [...(prevComments?.comments || []), ...data.comments],
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
			return <div>Something went wrong.</div>;
		} finally {
			setLoading(false);
		}
	}, [postId, hasNextPage, loading, page]);
	const scrollLoadCommentsRef = useScroll(fetchData);

	return (
		<section className="container my-24 flex w-full max-w-[500px] flex-col gap-4">
			<h1 className="text-2xl">
				Comments <span>({totalComments})</span>
			</h1>
			<AddComment />
			{commentsData?.comments &&
				commentsData.comments.map((comment) => {
					return (
						<Comment
							id={comment.id}
							author={comment.author?.username}
							content={comment.content}
							date={comment.date_posted}
							key={comment.id}
						/>
					);
				})}
			{loading === false && hasNextPage && (
				<div ref={scrollLoadCommentsRef}></div>
			)}
			{hasNextPage && loading === true && <LoadingSpinner sizePx="24px" />}
		</section>
	);
};
export default CommentsList;
