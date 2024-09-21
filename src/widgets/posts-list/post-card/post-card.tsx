import { dateFormatter } from "@/utils/date-formatter";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
interface Props {
	id: number;
	author: string;
	commentsCount: number;
	content: string;
	date: string;
	title: string;
}

const PostCard: FunctionComponent<Props> = ({
	author,
	commentsCount,
	content,
	date,
	id,
	title,
}) => {
	const formattedDate = dateFormatter.format(new Date(date));
	return (
		<div className="flex h-min flex-col rounded p-8 shadow-lg">
			<h2 className="text-3xl font-semibold hover:text-yellow-500">
				<Link to={`/posts/${id}`}>{title}</Link>
			</h2>
			<p className="mt-6 max-h-36  overflow-hidden text-slate-500 ">
				{content}...
			</p>
			<p className="mt-4 text-slate-800">
				By <b>{author}</b>
			</p>
			<p className="text-slate-600">Comments: {commentsCount}</p>
			<div className="flex justify-between">
				<time className="text-slate-600" dateTime={date}>
					{formattedDate}
				</time>
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

export default PostCard;
