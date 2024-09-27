import { getIdAndUsername } from "@/utils/auth";
import { dateFormatter } from "@/utils/date-formatter";
import { FunctionComponent, useState } from "react";
import { useFetcher } from "react-router-dom";

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
						<button className="ml-4 w-24 items-center rounded-lg bg-red-500 px-4 py-2.5 text-center text-xs font-medium text-black  hover:bg-red-600 focus:ring-1 focus:ring-yellow-400">
							Delete
						</button>
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
