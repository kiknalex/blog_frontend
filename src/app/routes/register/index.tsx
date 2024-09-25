import { isLoggedIn } from "@/utils/auth";
import RegisterForm from "@/widgets/register-form/register-form";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
	const navigate = useNavigate();
	const loggedIn = isLoggedIn();

	useLayoutEffect(() => {
		if (loggedIn) {
			navigate("/");
		}
	}, [loggedIn, navigate]);

	return (
		<main className="pt-10">
			<RegisterForm />
		</main>
	);
};

export default RegisterPage;
