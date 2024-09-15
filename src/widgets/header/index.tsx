import logoUrl from "@/assets/hot-coffee-logo.jpg";

import SocMediaIconsRow from "../soc-media-icons-row";

const Header = () => {
	return (
		<header>
			<a aria-label="Home" href="/">
				<img alt="HotCoffee logo" src={logoUrl} />
			</a>
			<SocMediaIconsRow />
		</header>
	);
};

export default Header;
