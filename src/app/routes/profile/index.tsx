import { isLoggedIn } from "@/utils/is-logged-in";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
	const navigate = useNavigate();
	const loggedIn = isLoggedIn();

	useLayoutEffect(() => {
		if (!loggedIn) {
			navigate("/");
		}
	}, [loggedIn, navigate]);
	return <main>asd</main>;
};

export default ProfilePage;
