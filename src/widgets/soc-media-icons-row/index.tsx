import SocLink from "@/components/soc-link";

const SocMediaIconsRow = () => {
	return (
		<nav>
			<SocLink
				className="w-6"
				socMedia="github"
				target="_blank"
				url="https://github.com/kiknalex/blog_frontend"
			/>
			<SocLink
				className="w-6"
				socMedia="linkedin"
				target="_blank"
				url="https://www.linkedin.com/in/aleksandre-kiknadze-a94272221/"
			/>
		</nav>
	);
};

export default SocMediaIconsRow;
