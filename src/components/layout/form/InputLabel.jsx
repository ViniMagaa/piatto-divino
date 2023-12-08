function InputLabel({input}) {
  return (
		<div>
			<label htmlFor={input.id}>{input.title}</label>
			<input
				type={input.type}
				name={input.id}
				id={input.id}
				placeholder={input.placeholder}
        onChange={input.handleChange}
        autoComplete={input.autoComplete}
        required
			/>
		</div>
	);
}

export default InputLabel;