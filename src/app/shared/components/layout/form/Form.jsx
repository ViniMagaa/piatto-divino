import { Button } from "../../";
import { InputLabel } from "./InputLabel";

import "./Form.css";

export const Form = ({ formQuestions, handleClick, submitText }) => {
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			{formQuestions.map((question, index) => {
				return <InputLabel key={index} input={question} />;
			})}
			<Button type="submit" handleClick={handleClick}>
				{submitText}
			</Button>
		</form>
	);
};
