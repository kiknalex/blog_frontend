import SocLink from "@/components/soc-link/soc-link";

const SocMediaIconsRow = () => {
	return (
		<div className="flex items-center gap-2">
			<SocLink
				className="w-6"
				socMedia="github"
				url="https://github.com/kiknalex/blog_frontend"
			/>
			<SocLink
				className="w-6"
				socMedia="linkedin"
				url="https://www.linkedin.com/in/aleksandre-kiknadze-a94272221/"
			/>
		</div>
	);
};

export default SocMediaIconsRow;
