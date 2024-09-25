import { isLoggedIn } from "@/utils/is-logged-in";
import RegisterForm from "@/widgets/register-form/register-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
	const navigate = useNavigate();
	const loggedIn = isLoggedIn();

	useEffect(() => {
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
