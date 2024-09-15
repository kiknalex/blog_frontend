import logoUrl from "@/assets/hot-coffee-logo.jpg";

import SocMediaIconsRow from "../soc-media-icons-row/soc-media-icons-row";
import Nav from "./nav/nav";

const Header = () => {
	return (
		<header className="h-[85px] flex justify-between items-center container">
			<a aria-label="Home" href="/">
				<img alt="HotCoffee logo" src={logoUrl} />
			</a>
			<div className="flex items-center">
				<Nav />
				<SocMediaIconsRow />
			</div>
		</header>
	);
};

export default Header;
