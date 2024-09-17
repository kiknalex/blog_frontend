const PostCardSkeleton = () => {
	return (
		<div className="flex flex-col rounded p-8 shadow-lg">
			<div className="animate-skeleton h-6 w-3/4 bg-gray-300"></div>
			<div className="animate-skeleton mt-6 h-36 bg-gray-300 "></div>
			<div className="animate-skeleton mt-4 h-2 w-12 bg-gray-300"></div>
			<div className="animate-skeleton mt-1 h-2 w-12 bg-gray-300"></div>
			<div className="flex justify-between ">
				<div className="animate-skeleton mt-1 h-2 w-12 bg-gray-300"></div>
				<div className="animate-skeleton mt-1 h-3 w-12 bg-gray-300"></div>
			</div>
			<div></div>
		</div>
	);
};

export default PostCardSkeleton;
