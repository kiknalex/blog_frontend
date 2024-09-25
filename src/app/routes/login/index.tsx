import { isLoggedIn } from "@/utils/auth";
import LoginForm from "@/widgets/login-form/login-form";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate();
	const loggedIn = isLoggedIn();

	useLayoutEffect(() => {
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
