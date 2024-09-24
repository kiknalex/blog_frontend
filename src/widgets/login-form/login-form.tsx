import { ButtonShowPassword } from "@/components/button-show-password/button-show-password";
import LoadingSpinner from "@/components/loading-spinner/loading-spinner";
import { useEffect, useRef, useState } from "react";
import { Link, useFetcher, useNavigate } from "react-router-dom";

const LoginForm = () => {
	const fetcher = useFetcher({ key: "login" });
	const [displayError, setDisplayError] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const navigate = useNavigate();
	useEffect(() => {
		if (formRef.current && fetcher.state === "idle") {
			formRef.current.reset();
		}
		if (fetcher.data?.message && fetcher.state === "idle") {
			setDisplayError(true);
		}
		if (fetcher.data?.ok) {
			navigate("/");
		}
	}, [fetcher.state, fetcher.data, navigate]);

	const handleSubmitClick = () => {
		setDisplayError(false);
	};
	return (
		<div className="container w-full rounded-lg border border-gray-200 bg-white shadow sm:max-w-md md:mt-0 xl:p-0 ">
			<div className="space-y-4 p-6 sm:p-8 md:space-y-6">
				<h1 className="text-xl font-bold  text-gray-900 md:text-2xl ">
					Sign in to your account
				</h1>
				<fetcher.Form
					action="/login"
					className="space-y-4 md:space-y-6"
					method="POST"
					ref={formRef}
				>
					<div>
						<label
							className="mb-2 block text-sm font-medium text-gray-900 "
							htmlFor="username"
						>
							Username
						</label>
						<input
							id="username"
							className=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 "
							name="username"
							placeholder="Enter username..."
							required
							type="text"
						/>
					</div>
					<div>
						<label
							className="mb-2 block text-sm font-medium text-gray-900"
							htmlFor="password"
						>
							Password
						</label>
						<div className="relative">
							<input
								id="password"
								className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-gray-900"
								minLength={8}
								name="password"
								placeholder="••••••••"
								required
								type={passwordVisible ? "text" : "password"}
							/>
							<ButtonShowPassword
								onClick={() => setPasswordVisible(!passwordVisible)}
								visible={passwordVisible}
							/>
						</div>
					</div>
					<p className="text-red-500">
						{(displayError && fetcher.data?.message) || ""}
					</p>
					<button
						className="w-full rounded-lg bg-yellow-400 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
						onClick={handleSubmitClick}
						type="submit"
					>
						{fetcher.state === "idle" ? (
							"Sign in"
						) : (
							<LoadingSpinner sizePx="20px" />
						)}
					</button>
					<p className="text-sm font-light text-gray-500 ">
						Don’t have an account yet?{" "}
						<Link
							className="font-medium text-gray-600 hover:underline"
							to="/register"
						>
							Sign up
						</Link>
					</p>
				</fetcher.Form>
			</div>
		</div>
	);
};

export default LoginForm;
