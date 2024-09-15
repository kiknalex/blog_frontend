import SocMediaIconsRow from "../soc-media-icons-row/soc-media-icons-row";

const Footer = () => {
	return (
		<footer className="container flex h-20 items-center justify-between">
			<div>
				<p className="font-bold">
					hotcoffee <small>2024 &#169; all rights reserved</small>
				</p>
			</div>
			<SocMediaIconsRow />
		</footer>
	);
};

export default Footer;
