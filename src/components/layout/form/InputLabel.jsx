function InputLabel({input}) {
  return (
		<div>
			<label htmlFor={input.id}>{input.title}</label>
			<input
				type={input.type}
				name={input.id}
				id={input.id}
				value={input.value}
				placeholder={input.placeholder}
        onChange={(e) => input.handleChange(e.target.value)}
        autoComplete={input.autoComplete}
        required
			/>
		</div>
	);
}

export default InputLabel;