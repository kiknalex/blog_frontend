import { AuthContext } from "@/hooks/context/auth-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	const loggedIn = useContext(AuthContext);

	return (
		<nav className="flex gap-1">
			<Link className="px-1 hover:text-yellow-500" to="/">
				Home
			</Link>

			{loggedIn ? (
				<Link className="px-1 hover:text-yellow-500" to="/profile">
					Profile
				</Link>
			) : (
				<Link className="px-1 hover:text-yellow-500" to="/login">
					Login
				</Link>
			)}
		</nav>
	);
};

export default Nav;
