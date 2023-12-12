import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import RecipesContext from "../../context/RecipesContext";
import Form from "../layout/form/Form";

function CreateRecipe() {
	const { user, recipes, setFlagMessage } = useContext(RecipesContext);

	const navigate = useNavigate();

	const nameRef = useRef();
	const imgRef = useRef();
	const descriptionRef = useRef();
	const ingredientsRef = useRef();
	const instructionsRef = useRef();

	const formQuestions = [
		{
			id: "name",
			title: "Nome da receita",
			type: "text",
			autoComplete: "off",
			placeholder: "Ex: Macarrão ao molho Presto",
			ref: nameRef,
		},
		{
			id: "img",
			title: "Imagem",
			type: "text",
			autoComplete: "off",
			placeholder: "Cole o link de uma imagem",
			ref: imgRef,
		},
		{
			id: "description",
			title: "Descrição",
			type: "text",
			autoComplete: "off",
			placeholder: "Escreva o que é a receita",
			ref: descriptionRef,
		},
		{
			id: "ingredients",
			title: "Ingredientes (separe por \",\")",
			type: "text",
			autoComplete: "off",
			placeholder: "Separe-os por vírgulas",
			ref: ingredientsRef,
		},
		{
			id: "instructions",
			title: "Instruções (separe por \",\")",
			type: "text",
			autoComplete: "off",
			placeholder: "Separe-as por vírgulas",
			ref: instructionsRef,
		},
	];

	const submitForm = () => {
		const hasEmptyValues = formQuestions.some(
			(question) => question.ref.current.value === ""
		);

		if (hasEmptyValues) {
			setFlagMessage({
				isVisible: true,
				message: "Preencha todos os dados!",
				subMessage: "Ainda existem informações faltando.",
			});
		} else {
			const newRecipe = {
				id: recipes.length,
				name: nameRef.current.value,
				img: imgRef.current.value,
				description: descriptionRef.current.value,
				ingredients: ingredientsRef.current.value.split(","),
				instructions: instructionsRef.current.value.split(","),
				author: {
					id: user.id,
					name: user.name,
				},
			};

			try {
				fetch("http://localhost:5000/recipes", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newRecipe),
				});
			} catch (error) {
				console.log(error);
			}

			setFlagMessage({
				isVisible: true,
				message: "Receita publicada!",
				subMessage: "Agradecemos a sua contribuição. 😉",
			});

			navigate("/chef");
		}
	};

	return (
		<section>
			<h1>Publique sua receita</h1>
			<div className="form-container">
				<Form
					formQuestions={formQuestions}
					handleClick={submitForm}
					submitText="Publicar"
				/>
			</div>
		</section>
	);
}

export default CreateRecipe;
