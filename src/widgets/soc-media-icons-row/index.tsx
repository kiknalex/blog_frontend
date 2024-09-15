import SocLink from "@/components/soc-link";

const SocMediaIconsRow = () => {
	return (
		<nav>
			<SocLink
				socMedia="github"
				target="_blank"
				url="https://github.com/kiknalex/blog_frontend"
			/>
			<SocLink
				socMedia="linkedin"
				target="_blank"
				url="https://www.linkedin.com/in/aleksandre-kiknadze-a94272221/"
			/>
		</nav>
	);
};

export default SocMediaIconsRow;
