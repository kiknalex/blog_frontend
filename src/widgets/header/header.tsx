import logoUrl from "@/assets/hot-coffee-logo.jpg";

import SocMediaIconsRow from "../soc-media-icons-row/soc-media-icons-row";
import Nav from "./nav/nav";

const Header = () => {
	return (
		<header className="container flex h-[85px] items-center justify-between">
			<a aria-label="Home" href="/">
				<img alt="HotCoffee logo" src={logoUrl} />
			</a>
			<div className="flex items-center gap-2">
				<Nav />
				<SocMediaIconsRow />
			</div>
		</header>
	);
};

export default Header;
