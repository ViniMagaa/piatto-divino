import { Button, InputLabel } from "../..";

import "./Form.css";

export const Form = ({ formQuestions, handleClick, submitText }) => {
	return (
		<form onSubmit={(e) => e.preventDefault()} className="form">
			{formQuestions.map((question, index) => {
				return <InputLabel key={index} label={question.label} input={question.input} />;
			})}
			<Button type="submit" handleClick={handleClick}>
				{submitText}
			</Button>
		</form>
	);
};
