import "./InputLabel.css";

export const InputLabel = ({ input, label, children }) => {
	const renderInput = () => {
		if (input.type === "textarea") {
			return <textarea {...input} required />;
		}

		if (input.type === "select") {
			return (
				<select {...input} required>
					<option value="" disabled>
						-- Selecione uma opção --
					</option>
					{children}
				</select>
			);
		}

		return <input {...input} required />;
	};

	if (input.type === "checkbox") {
		return (
			<label htmlFor={input.id}>
				<input {...input} />
				{label}
			</label>
		);
	}

	return (
		<label className="input-label" htmlFor={input.id}>
			{label}
			{renderInput()}
		</label>
	);
};
