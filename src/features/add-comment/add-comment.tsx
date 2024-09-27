import LoadingSpinner from "@/components/loading-spinner/loading-spinner";
import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

const AddComment = () => {
	const fetcher = useFetcher({ key: "add-new-comment" });
	const formRef = useRef<HTMLFormElement>(null);
	useEffect(() => {
		if (formRef.current && fetcher.state === "idle") {
			formRef.current.reset();
		}
	}, [fetcher.state]);
	return (
		<fetcher.Form action="comments" method="post" ref={formRef}>
			<div className="flex flex-col gap-2">
				<label className="sr-only" htmlFor="comment-content">
					Your comment
				</label>
				<textarea
					id="comment-content"
					className="block h-32 w-full rounded-md  bg-gray-50 p-2.5"
					maxLength={300}
					name="content"
					placeholder="Leave a comment..."
					required
				/>
				<button
					className="w-32 items-center rounded-lg bg-yellow-300 px-4 py-2.5 text-center text-xs font-medium text-black  hover:bg-yellow-400 focus:ring-1 focus:ring-yellow-400"
					type="submit"
				>
					{fetcher.state === "idle" ? (
						"Post comment"
					) : (
						<LoadingSpinner sizePx="16px" />
					)}
				</button>
			</div>
		</fetcher.Form>
	);
};

export default AddComment;
