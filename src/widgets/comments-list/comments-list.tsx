import {
	fetchLatestComment,
	fetchOnScrollComments,
} from "@/api/services/comments-list/fetch";
import LoadingSpinner from "@/components/loading-spinner/loading-spinner";
import useScroll from "@/hooks/use-scroll";
import { CommentsType, CommentType } from "@/types/api/api-data";
import AddComment from "@/widgets/comments-list/add-comment/add-comment";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

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
	const [commentsCount, setCommentsCount] = useState(totalComments);
	const fetcher = useFetcher({ key: "add-new-comment" });
	const fetchData = useCallback(async () => {
		if (loading || !hasNextPage) return;
		try {
			setLoading(true);
			const data = await fetchOnScrollComments(+postId, limit, page);
			if (data) {
				setCommentsData((prevComments) => {
					const existingCommentIds = prevComments?.comments.map((c) => c.id);
					const newComments = data.comments.filter(
						(comment) => !existingCommentIds?.includes(comment.id)
					);

					return {
						meta: data.meta,
						comments: [...(prevComments?.comments || []), ...newComments],
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
	}, [postId, hasNextPage, loading, page]);

	const scrollLoadCommentsRef = useScroll(fetchData);

	useEffect(() => {
		const addLatestComment = async () => {
			if (fetcher.data) {
				try {
					const data = await fetchLatestComment(+postId);
					if (data?.comments) {
						setCommentsData((prevComments) => {
							return {
								comments: [...data.comments, ...(prevComments?.comments || [])],
								meta: data.meta,
							};
						});
						setCommentsCount((prevCount) => prevCount + 1);
					}
				} catch (error) {
					console.error(error);
				}
			}
		};
		addLatestComment();
	}, [fetcher.data, postId]);

	return (
		<section className="container my-24 flex w-full max-w-screen-xs flex-col gap-4">
			<h1 className="text-2xl">
				Comments <span>({commentsCount})</span>
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
