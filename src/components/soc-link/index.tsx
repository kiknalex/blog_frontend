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
		<a href={url} target={target}>
			<span className={`${className} inline-block`}>
				<img alt={`${socMedia} icon`} height="50" src={iconUrl} width="50" />
			</span>
		</a>
	);
};

export default SocLink;
