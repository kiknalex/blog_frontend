import { ButtonShowPassword } from "@/components/button-show-password/button-show-password";
import LoadingSpinner from "@/components/loading-spinner/loading-spinner";
import { ValidationErrorType } from "@/types/api/fetch";
import { useEffect, useRef, useState } from "react";
import { Link, useFetcher, useNavigate } from "react-router-dom";

const RegisterForm = () => {
	const fetcher = useFetcher({ key: "register" });
	const [displayError, setDisplayError] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);
	const navigate = useNavigate();
	useEffect(() => {
		if (formRef.current && fetcher.state === "idle") {
			formRef.current.reset();
		}
		if (!fetcher?.data?.ok && fetcher.state === "idle") {
			setDisplayError(true);
		}
		if (fetcher.data?.ok) {
			navigate("/login");
		}
	}, [fetcher.state, fetcher.data, navigate]);

	const handleSubmitClick = () => {
		setDisplayError(false);
	};
	return (
		<div className="container">
			<div className="mx-auto w-full rounded-lg border border-gray-200 bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
				<div className="space-y-4 p-6 sm:p-8 md:space-y-6">
					<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
						Create an account
					</h1>
					<fetcher.Form
						action="/register"
						className="space-y-4 md:space-y-6"
						method="POST"
						ref={formRef}
					>
						<div>
							<label
								className="mb-2 block text-sm font-medium text-gray-900"
								htmlFor="username"
							>
								Username
							</label>
							<input
								id="username"
								autoComplete="username"
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-yellow-600 focus:ring-yellow-600 "
								name="username"
								placeholder="Enter your username..."
								required
								type="text"
							/>
							<div className="mt-2 text-sm text-red-600">
								{displayError &&
									fetcher?.data?.data &&
									fetcher.data.data?.map(
										(error: ValidationErrorType, index: number) => {
											if (error.field === "username") {
												// eslint-disable-next-line sonarjs/no-array-index-key
												return <span key={index}>{error.message}</span>;
											}
										}
									)}
							</div>
						</div>

						<div>
							<label
								className="mb-2 block text-sm font-medium text-gray-900"
								htmlFor="new-password"
							>
								Password
							</label>
							<div className="relative">
								<input
									id="new-password"
									autoComplete="new-password"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-yellow-600 focus:ring-yellow-600 "
									maxLength={100}
									minLength={8}
									name="new-password"
									placeholder="••••••••"
									required
									type={passwordVisible ? "text" : "password"}
								/>
								<ButtonShowPassword
									onClick={() => setPasswordVisible(!passwordVisible)}
									visible={passwordVisible}
								/>
							</div>
							<div className="mt-2 text-sm text-red-600">
								{displayError &&
									fetcher.data?.data &&
									fetcher.data.data.map(
										(error: ValidationErrorType, index: number) => {
											if (error.field === "password") {
												// eslint-disable-next-line sonarjs/no-array-index-key
												return <span key={index}>{error.message}</span>;
											}
										}
									)}
							</div>
						</div>

						<button
							className="w-full rounded-lg bg-yellow-400 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
							disabled={fetcher.state !== "idle"}
							onClick={handleSubmitClick}
							type="submit"
						>
							{fetcher.state === "idle" ? (
								"Create an account"
							) : (
								<LoadingSpinner sizePx="20px" />
							)}
						</button>
						<p className="text-sm font-light text-gray-500">
							Already have an account?{" "}
							<Link
								className="font-medium text-gray-600 hover:underline"
								to="/login"
							>
								Login here
							</Link>
						</p>
					</fetcher.Form>
				</div>
			</div>
		</div>
	);
};
export default RegisterForm;
