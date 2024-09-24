import { FunctionComponent } from "react";

interface Props {
	visible: boolean;
	onClick: VoidFunction;
}

export const ButtonShowPassword: FunctionComponent<Props> = ({
	visible,
	onClick,
}) => {
	return (
		<button
			aria-label={
				visible
					? "Hide password."
					: "Show password as plain text. Warning: this will display your password on the screen."
			}
			className="absolute bottom-1/4 right-2 w-8"
			onClick={onClick}
			type="button"
		>
			{visible ? (
				<span>
					{/* eslint-disable-next-line tailwindcss/no-custom-classname */}
					<i className="fa-regular fa-eye-slash"></i>
				</span>
			) : (
				<span>
					{/* eslint-disable-next-line tailwindcss/no-custom-classname */}
					<i className="fa-regular fa-eye"></i>
				</span>
			)}
		</button>
	);
};
