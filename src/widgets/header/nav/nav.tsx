const Nav = () => {
	return (
		<nav className="flex gap-1">
			<a className="px-1" href="/">
				Home
			</a>
			<a className="px-1" href="/posts">
				Posts
			</a>
			<a className="px-1" href="login">
				Login
			</a>
		</nav>
	);
};

export default Nav;
