import githubIconUrl from "@assets/github-brands-solid.svg";
import linkedinIconUrl from "@assets/linkedin-brands-solid.svg";

const SocLink = ({
	socMedia,
	target,
	url,
}: {
	socMedia: "github" | "linkedin";
	target?: "_blank";
	url: string;
}) => {
	const iconUrl = socMedia === "github" ? githubIconUrl : linkedinIconUrl;
	return (
		<a href={url} target={target}>
			<span>
				<i>
					<img alt={`${socMedia} icon`} src={iconUrl} />
				</i>
			</span>
		</a>
	);
};

export default SocLink;
