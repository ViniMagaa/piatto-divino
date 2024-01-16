import "./InputLabel.css";

export const InputLabel = ({
	input: { id, title, type, autoComplete, placeholder, ref },
}) => {
	return (
		<label htmlFor={id}>
			{title}
			<input
				type={type}
				name={id}
				id={id}
				autoComplete={autoComplete}
				placeholder={placeholder}
				ref={ref}
				required
			/>
		</label>
	);
};
