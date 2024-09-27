import logoUrl from "@/assets/hot-coffee-logo.jpg";
import { Link } from "react-router-dom";

import SocMediaIconsRow from "../soc-media-icons-row/soc-media-icons-row";
import Nav from "./nav/nav";

const Header = () => {
	return (
		<header className="container flex h-[85px] items-center justify-center  xxs:justify-between">
			<Link aria-label="Home" className="hidden xxs:flex" to="/">
				<img alt="HotCoffee logo" src={logoUrl} />
			</Link>
			<div className="flex items-center gap-2">
				<Nav />
				<SocMediaIconsRow className="hidden md:flex " />
			</div>
		</header>
	);
};

export default Header;
