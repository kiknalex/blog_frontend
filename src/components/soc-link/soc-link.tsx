const SocLink = ({
	className,
	socMedia,
	url,
}: {
	className: string;
	socMedia: "github" | "linkedin";
	url: string;
}) => {
	const iconUrl =
		socMedia === "github" ? (
			<i className="fa-brands fa-square-github"></i>
		) : (
			<i className="fa-brands fa-linkedin"></i>
		);
	return (
		<a
			className="inline-block p-2"
			href={url}
			rel="noopener noreferrer"
			target="_blank"
		>
			<span className={`${className} hover:text-yellow-500`}>{iconUrl}</span>
		</a>
	);
};

export default SocLink;
