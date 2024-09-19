import { CommentsType, CommentType } from "@/api/types/api-data";
import LoadingSpinner from "@/components/loading-spinner/loading-spinner";
import useScroll from "@/hooks/use-scroll";
import { useCallback, useRef, useState } from "react";

import Comment from "./comment/comment";

const BASE_URL = import.meta.env.VITE_API_URL;

const CommentsList = ({
	initialComments,
	postId,
	totalComments,
}: {
	initialComments: CommentType[];
	postId: string;
	totalComments: number;
}) => {
	const [commentsData, setCommentsData] = useState<
		{ comments: CommentType[] } | CommentsType | undefined
	>({ comments: initialComments });
	const [loading, setLoading] = useState<boolean>(false);
	const scrollLoadCommentsRef = useRef<HTMLDivElement | null>(null);
	const [page, setPage] = useState<number>(2);
	useScroll(() => fetchData(3, page), scrollLoadCommentsRef);
	const fetchData = useCallback(
		async (limit: number, page: number) => {
			try {
				setLoading(true);
				const response = await fetch(
					`${BASE_URL}/posts/${postId}/comments?limit=${limit}&page=${page}`
				);
				const data = await response.json();
				if (data.comments.length > 0) {
					setCommentsData((previousData) => ({
						comments: [...(previousData?.comments || []), ...data.comments],
					}));
					setPage(page + 1);
				}
			} catch (error) {
				console.error("ERRROR:", error);
			} finally {
				setLoading(false);
			}
		},
		[postId]
	);

	return (
		<section className="container my-24 flex w-full max-w-[500px] flex-col gap-4">
			<h1 className="text-2xl">
				Comments <span>({totalComments})</span>
			</h1>
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
			{commentsData?.comments && !loading ? (
				commentsData.comments.length < totalComments && (
					<div ref={scrollLoadCommentsRef}></div>
				)
			) : (
				<LoadingSpinner sizePx="24px" />
			)}
		</section>
	);
};
export default CommentsList;
