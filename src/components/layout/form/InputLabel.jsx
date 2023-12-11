function InputLabel({
	input: { id, title, type, placeholder, autoComplete, handleChange, value},
}) {
	return (
		<div>
			<label htmlFor={id}>{title}</label>
			<input
				type={type}
				name={id}
				id={id}
				value={value}
				placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        autoComplete={autoComplete}
        required
			/>
		</div>
	);
}

export default InputLabel;
