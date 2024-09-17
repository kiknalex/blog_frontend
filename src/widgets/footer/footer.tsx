import SocMediaIconsRow from "../soc-media-icons-row/soc-media-icons-row";

const Footer = () => {
	return (
		<footer className=" flex h-20 items-center divide-gray-300 border-t-2 border-solid">
			<div className="container flex items-center justify-between">
				<div>
					<p className="font-bold">
						hotcoffee <small>2024 &#169; all rights reserved</small>
					</p>
				</div>
				<SocMediaIconsRow />
			</div>
		</footer>
	);
};

export default Footer;
