import { isLoggedIn } from "@/utils/is-logged-in";
import LoginForm from "@/widgets/login-form/login-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate();
	const loggedIn = isLoggedIn();

	useEffect(() => {
		if (loggedIn) {
			navigate("/");
		}
	}, [loggedIn, navigate]);

	return (
		<main className="pt-20">
			<LoginForm />
		</main>
	);
};

export default LoginPage;
