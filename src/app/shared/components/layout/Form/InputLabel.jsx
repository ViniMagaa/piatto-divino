export const InputLabel = ({
	input: { id, title, type, autoComplete, placeholder, ref },
}) => {
	return (
		<div>
			<label htmlFor={id}>{title}</label>
			<input
				type={type}
				name={id}
				id={id}
				autoComplete={autoComplete}
				placeholder={placeholder}
				ref={ref}
				required
			/>
		</div>
	);
};
