export const Button = ({
	children,
	type = "button",
	handleClick,
	scroll = true,
}) => {
	const handleOnClick = () => {
		handleClick();
		if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button type={type} onClick={handleOnClick}>
			{children}
		</button>
	);
};
