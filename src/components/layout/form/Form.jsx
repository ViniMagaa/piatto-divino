import Button from "../Button";
import InputLabel from "./InputLabel";

function Form({ formQuestions, handleClick, submitText }) {
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			{formQuestions.map((question, index) => {
        return <InputLabel key={index} input={question} />
      })}
			<Button type="submit" handleClick={handleClick}>{submitText}</Button>
		</form>
	);
}

export default Form;
