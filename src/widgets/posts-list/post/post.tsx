import { Link } from "react-router-dom";

interface PostPropsType {
	id: number;
	author: string;
	commentsCount: number;
	content: string;
	date: string;
	title: string;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
	day: "numeric",
	month: "short",
	year: "numeric",
});

const Post = ({
	author,
	commentsCount,
	content,
	date,
	id,
	title,
}: PostPropsType) => {
	const formattedDate = dateFormatter.format(new Date(date));
	return (
		<div className="flex flex-col rounded p-8 shadow-lg">
			<h2 className="text-3xl font-semibold hover:text-yellow-500">
				<Link to={`/posts/${id}`}>{title}</Link>
			</h2>
			<p className="mt-6 max-h-36  overflow-hidden text-slate-500 ">
				{content}...
			</p>
			<p className="mt-4 text-slate-800">
				By <strong>{author}</strong>
			</p>
			<p className="text-slate-600">Comments: {commentsCount}</p>
			<div className="flex justify-between">
				<p className="text-slate-600">{formattedDate}</p>
				<Link
					className="text-slate-600 hover:text-yellow-500"
					to={`/posts/${id}`}
				>
					Read more &#x2192;
				</Link>
			</div>
		</div>
	);
};

export default Post;
