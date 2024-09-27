import SocLink from "@/components/soc-link/soc-link";

const SocMediaIconsRow = ({ className }: { className?: string }) => {
	return (
		<div className={`flex items-center gap-2 ${className}`}>
			<SocLink
				className="text-2xl"
				socMedia="github"
				url="https://github.com/kiknalex/blog_frontend"
			/>
			<SocLink
				className="text-2xl"
				socMedia="linkedin"
				url="https://www.linkedin.com/in/aleksandre-kiknadze-a94272221/"
			/>
		</div>
	);
};

export default SocMediaIconsRow;
