import { getIdAndUsername } from "@/utils/auth";
import { dateFormatter } from "@/utils/date-formatter";
import { FunctionComponent, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Form, useFetcher } from "react-router-dom";

interface Props {
	author: string;
	content: string | undefined;
	date: string;
	title: string;
	postId: number | string;
}

const Post: FunctionComponent<Props> = ({
	author,
	content,
	date,
	title,
	postId,
}) => {
	const [editMode, setEditMode] = useState(false);
	const fetcher = useFetcher({ key: "edit-post" });
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const userInfo = getIdAndUsername();
	const optimisticContent =
		(fetcher.formData?.get("content") as string) ||
		fetcher.data?.content ||
		content;
	const isUserAuthor = userInfo ? userInfo.username === author : false;

	const handleEditClick = () => {
		setEditMode(!editMode);
	};
	const handleCancelClick = () => {
		setEditMode(false);
	};
	const handleSubmitForm = () => {
		setEditMode(false);
	};

	const handleDeleteClick = () => {
		dialogRef?.current?.showModal();
	};
	const handleModalCancelClick = () => {
		dialogRef?.current?.close();
	};
	return (
		<>
			<h1 className="text-5xl font-bold text-gray-800">{title}</h1>
			<div className="mt-4 flex items-center justify-between gap-4">
				<div>
					<address className="font-semibold not-italic">
						Written by {author}
					</address>
					<time dateTime={date}>{dateFormatter.format(new Date(date))}</time>
				</div>
				{isUserAuthor && (
					<div>
						<button
							className="w-24 items-center rounded-lg bg-yellow-300 px-4 py-2.5 text-center text-xs font-medium text-black  hover:bg-yellow-400 focus:ring-1 focus:ring-yellow-400"
							onClick={handleEditClick}
						>
							Edit
						</button>
						<button
							className="ml-4 w-24 items-center rounded-lg bg-red-500 px-4 py-2.5 text-center text-xs font-medium text-black  hover:bg-red-600 focus:ring-1 focus:ring-yellow-400"
							onClick={handleDeleteClick}
						>
							Delete
						</button>
						{createPortal(
							<dialog
								aria-label="Delete post action confirmation"
								className="h-64 w-96 flex-col items-center justify-start gap-4 p-8 open:flex"
								ref={dialogRef}
								role="alertdialog"
							>
								<h2 className="text-lg font-semibold">Warning!</h2>
								<p className="">
									This action will delete post <strong>permanently</strong>.
								</p>
								<p>Proceed?</p>
								<div className="mt-4 flex gap-4">
									<button
										className="w-32 items-center rounded-lg bg-yellow-300 px-4 py-2.5 text-center text-xs font-medium text-black  hover:bg-yellow-400 focus:ring-1 focus:ring-yellow-400"
										onClick={handleModalCancelClick}
										type="button"
									>
										Cancel
									</button>
									<Form action="delete" method="DELETE">
										<button
											className="w-32 items-center rounded-lg bg-red-500 px-4 py-2.5 text-center text-xs font-medium text-black  hover:bg-red-600 focus:ring-1 focus:ring-yellow-400"
											type="submit"
										>
											Delete
										</button>
									</Form>
								</div>
							</dialog>,
							document.body
						)}
					</div>
				)}
			</div>
			<hr className="my-8" />
			{editMode ? (
				<fetcher.Form
					action={`/posts/${postId}/edit`}
					method="PUT"
					onSubmit={handleSubmitForm}
				>
					<label className="text-lg font-bold" htmlFor="post-content">
						Edit your post:
					</label>
					<textarea
						id="post-content"
						className="mt-4 h-96 w-full"
						defaultValue={content}
						maxLength={1000}
						minLength={50}
						name="content"
						required
					></textarea>
					<div className="mt-4 flex">
						<button
							className="w-32 items-center rounded-lg bg-yellow-300 px-4 py-2.5 text-center text-xs font-medium text-black  hover:bg-yellow-400 focus:ring-1 focus:ring-yellow-400"
							type="submit"
						>
							Submit
						</button>
						<button
							className="ml-4 w-32 items-center rounded-lg bg-red-500 px-4 py-2.5 text-center text-xs font-medium text-black  hover:bg-red-600 focus:ring-1 focus:ring-yellow-400"
							onClick={handleCancelClick}
							type="button"
						>
							Cancel
						</button>
					</div>
				</fetcher.Form>
			) : (
				<p className="mt-4">{optimisticContent}</p>
			)}
		</>
	);
};

export default Post;
