import { useAuthContext } from "@/hooks/auth/use-auth";
import { dateFormatter } from "@/utils/date-formatter";
import { FunctionComponent, useContext } from "react";

interface Props {
	author: string;
	content: string;
	date: string;
	title: string;
}

const Post: FunctionComponent<Props> = ({ author, content, date, title }) => {
	const context = useContext(useAuthContext());
	console.log(context);
	return (
		<>
			<h1 className="text-5xl font-bold text-gray-800">{title}</h1>
			<div className="mt-4 flex gap-4">
				<address className="font-semibold not-italic">
					Written by {author}
				</address>
				<time dateTime={date}>{dateFormatter.format(new Date(date))}</time>
			</div>
			<hr className="my-8" />
			<p className="mt-4">{content}</p>
		</>
	);
};

export default Post;
