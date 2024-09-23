import { Form } from "react-router-dom";

const AddComment = () => {
	return (
		<Form method="post">
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
					className="inline-flex w-max items-center rounded-lg bg-yellow-300 px-4 py-2.5 text-center text-xs font-medium text-black  hover:bg-yellow-400 focus:ring-1 focus:ring-yellow-400"
					type="submit"
				>
					Post comment
				</button>
			</div>
		</Form>
	);
};

export default AddComment;
