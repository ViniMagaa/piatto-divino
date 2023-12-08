import Button from "../Button";
import InputLabel from "./InputLabel";

function Form({ formQuestions, handleClick }) {
	return (
		<form>
			{formQuestions.map((question, index) => {
        return <InputLabel key={index} input={question} />
      })}
			<Button type="submit" handleClick={handleClick}>Cadastrar</Button>
		</form>
	);
}

export default Form;
