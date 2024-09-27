import LoadingSpinner from "@/components/loading-spinner/loading-spinner";
import { isLoggedIn } from "@/utils/auth";
import { useEffect } from "react";
import { useFetcher, useNavigate } from "react-router-dom";

const PostNew = () => {
	const fetcher = useFetcher();
	const navigate = useNavigate();
	const loggedIn = isLoggedIn();

	useEffect(() => {
		if (!loggedIn) {
			navigate("/");
		}
	}, [loggedIn, navigate]);

	return (
		<main>
			<fetcher.Form className="container mt-12" method="POST">
				<div className="mx-auto flex max-w-[800px] flex-col rounded-lg border border-gray-300 p-4 text-gray-800 shadow-lg">
					<label
						className="mb-2 block text-sm font-medium text-gray-900 "
						htmlFor="title"
					>
						Title
					</label>
					<input
						id="title"
						className="block w-full rounded-lg border border-gray-300  p-2 text-base text-gray-900 "
						maxLength={300}
						minLength={3}
						name="title"
						placeholder="Enter your title..."
						required
						type="text"
					/>
					<label
						className="my-2 block text-sm font-medium text-gray-900 "
						htmlFor="content"
					>
						Content
					</label>
					<textarea
						id="content"
						className="block w-full rounded-lg border border-gray-300  p-2.5  text-gray-900 "
						maxLength={1000}
						minLength={50}
						name="content"
						placeholder="Enter your content..."
						required
						rows={8}
					></textarea>

					<button className="mt-4 w-20 items-center rounded-lg bg-yellow-300 px-4 py-2.5 text-center text-xs font-medium text-black  hover:bg-yellow-400 focus:ring-1 focus:ring-yellow-400">
						{fetcher.state === "idle" ? (
							"Submit"
						) : (
							<LoadingSpinner sizePx="16px" />
						)}
					</button>
				</div>
			</fetcher.Form>
		</main>
	);
};

export default PostNew;
