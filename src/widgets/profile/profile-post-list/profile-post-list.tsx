import { ProfilePostType } from "@/types/api/api-data";
import PostCard from "@/widgets/posts-list/post-card/post-card";
const ProfilePostList = ({ data }: { data: ProfilePostType[] }) => {
	return (
		// eslint-disable-next-line sonarjs/jsx-no-useless-fragment
		<>
			{data.length > 0 ? (
				data.map((post) => {
					return (
						<PostCard
							id={post.id}
							commentsCount={post._count.comments}
							content={post.content}
							date={post.date_posted}
							title={post.title}
							key={post.id}
						/>
					);
				})
			) : (
				<p className="mt-4">No posts.</p>
			)}
		</>
	);
};

export default ProfilePostList;
