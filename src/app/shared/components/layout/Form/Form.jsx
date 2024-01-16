import { Button } from "../..";
import { InputLabel } from "./InputLabel/InputLabel";

import "./Form.css";

export const Form = ({ formQuestions, handleClick, submitText }) => {
	return (
		<form onSubmit={(e) => e.preventDefault()} className="form">
			{formQuestions.map((question, index) => {
				return <InputLabel key={index} input={question} />;
			})}
			<Button type="submit" handleClick={handleClick}>
				{submitText}
			</Button>
		</form>
	);
};
