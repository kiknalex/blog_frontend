import { Link } from "react-router-dom";

const ErrorElementGeneral = () => {
	return (
		<main className="container  mt-40 h-full text-center">
			<h1 className="text-3xl">Something went wrong.</h1>
			<Link className="mt-4 block text-xl font-semibold" to="/">
				Go to Home.
			</Link>
		</main>
	);
};

export default ErrorElementGeneral;
