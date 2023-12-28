import { useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../../../shared/components";
import { Form } from "../../../shared/components/layout";
import RecipesContext from "../../../shared/contexts/RecipesContext";

export const EditRecipe = () => {
	const { user, recipes, editRecipe, setFlagMessage } =
		useContext(RecipesContext);

	const { id } = useParams();
	const navigate = useNavigate();

	const nameRef = useRef();
	const imgRef = useRef();
	const descriptionRef = useRef();
	const ingredientsRef = useRef();
	const instructionsRef = useRef();

	useEffect(() => {
		nameRef.current.value = recipes[id].name;
		imgRef.current.value = recipes[id].img;
		descriptionRef.current.value = recipes[id].description;
		ingredientsRef.current.value = recipes[id].ingredients;
		instructionsRef.current.value = recipes[id].instructions;
	}, [recipes, id]);

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
			title: 'Ingredientes (separe por ",")',
			type: "text",
			autoComplete: "off",
			placeholder: "Separe-os por vírgulas",
			ref: ingredientsRef,
		},
		{
			id: "instructions",
			title: 'Instruções (separe por ",")',
			type: "text",
			autoComplete: "off",
			placeholder: "Separe-as por vírgulas",
			ref: instructionsRef,
		},
	];

	const submitForm = async () => {
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
			const editedRecipe = {
				id: id,
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
				await editRecipe(Number(id), editedRecipe);
			} catch (error) {
				console.log(error);
			}

			setFlagMessage({
				isVisible: true,
				message: "Receita editada!",
				subMessage: "Agora todos tem a versão atualizada. 😉",
			});

			navigate("/chef");
		}
	};

	return recipes && recipes[id].author.id === user.id ? (
		<section>
			<h1>Edite sua receita</h1>
			<div className="form-container">
				<Form
					formQuestions={formQuestions}
					handleClick={submitForm}
					submitText="Editar"
				/>
			</div>
		</section>
	) : (
		<section>
			<h1>Essa receita não pode ser editada!</h1>
			<Button handleClick={() => navigate("/chef")}>Voltar</Button>
		</section>
	);
};
