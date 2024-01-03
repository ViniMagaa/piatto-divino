import "./Button.css";

export const Button = ({ children, type, handleClick }) => {
	const handleOnClick = () => {
		handleClick();
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button type={type || "button"} onClick={handleOnClick}>
			{children}
		</button>
	);
};
