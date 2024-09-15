import githubIconUrl from "@assets/github-brands-solid.svg";
import linkedinIconUrl from "@assets/linkedin-brands-solid.svg";

const SocLink = ({
	className,
	socMedia,
	target,
	url,
}: {
	className: string;
	socMedia: "github" | "linkedin";
	target?: "_blank";
	url: string;
}) => {
	const iconUrl = socMedia === "github" ? githubIconUrl : linkedinIconUrl;
	return (
		<a className="inline-block p-2" href={url} target={target}>
			<img
				alt={`${socMedia} icon`}
				className={className}
				height="50"
				src={iconUrl}
				width="50"
			/>
		</a>
	);
};

export default SocLink;
