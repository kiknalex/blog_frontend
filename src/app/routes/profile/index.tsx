import { useGetProfile } from "@/hooks/api/use-fetch-api/use-fetch-api";
import { isLoggedIn } from "@/utils/auth";
import PostCardSkeleton from "@/widgets/posts-list/post-card/post-card-skeleton";
import ProfilePostList from "@/widgets/profile/profile-post-list/profile-post-list";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
	const [data, loading, error] = useGetProfile();
	const navigate = useNavigate();
	const loggedIn = isLoggedIn();

	useEffect(() => {
		if (!loggedIn) {
			navigate("/");
		}
	}, [loggedIn, navigate]);
	if (error) {
		return <div>Something went wrong.</div>;
	}
	return (
		<main>
			<div className="container">
				{data && <h1 className="text-4xl">{data.username}&#39;s profile</h1>}
			</div>
			<div className="container mt-12">
				<h2 className="text-5xl">Posts</h2>
				<div className="my-8 grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
					{Boolean(data?.posts) ? (
						<ProfilePostList data={data!.posts} />
					) : (
						<>
							<PostCardSkeleton />
							<PostCardSkeleton />
							<PostCardSkeleton />
							<PostCardSkeleton />
							<PostCardSkeleton />
							<PostCardSkeleton />
						</>
					)}
				</div>
			</div>
		</main>
	);
};

export default ProfilePage;
