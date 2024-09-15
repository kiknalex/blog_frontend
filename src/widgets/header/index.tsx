import logoUrl from "@/assets/hot-coffee-logo.jpg";

import SocMediaIconsRow from "../soc-media-icons-row";
import Nav from "./nav";

const Header = () => {
	return (
		<header>
			<a aria-label="Home" href="/">
				<img alt="HotCoffee logo" src={logoUrl} />
			</a>
			<h1 className="text-5xl">asdasd</h1>
			<Nav />
			<SocMediaIconsRow />
		</header>
	);
};

export default Header;
