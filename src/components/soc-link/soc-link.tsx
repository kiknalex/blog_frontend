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
			<i className="fa-brands fa-square-github"></i> // eslint-disable-line tailwindcss/no-custom-classname
		) : (
			<i className="fa-brands fa-linkedin"></i> // eslint-disable-line tailwindcss/no-custom-classname
		);
	return (
		<a
			className="inline-block"
			href={url}
			rel="noopener noreferrer"
			target="_blank"
		>
			<span className={`${className} p-2 hover:text-yellow-500`}>
				{iconUrl}
			</span>
		</a>
	);
};

export default SocLink;
