import { dateWithTimeFormatter } from "@/utils/date-formatter";
import he from "he";
interface CommentPropsType {
	content: string;
	date: string;
	author?: string;
	id?: number;
}

const Comment = ({ author = "Anonymous", content, date }: CommentPropsType) => {
	return (
		<article className="rounded-md border-2 p-4">
			<p className="text-gray-500">
				By <b>{author}</b> &#8226;{" "}
				<time dateTime={date}>
					{dateWithTimeFormatter.format(new Date(date))}
				</time>
			</p>
			<p className="mt-4">{he.decode(content)}</p>
		</article>
	);
};

export default Comment;
