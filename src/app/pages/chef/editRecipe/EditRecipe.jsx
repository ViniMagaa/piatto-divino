import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../../../shared/components";
import { Form } from "../../../shared/components/layout";
import RecipesContext from "../../../shared/contexts/RecipesContext";
import { ApiException } from "../../../shared/services/api/ApiException";
import { RecipesService } from "../../../shared/services/api/recipes/Recipes.service";

export const EditRecipe = () => {
	const { user, setFlagMessage } = useContext(RecipesContext);
	const [recipe, setRecipe] = useState({});

	const { id } = useParams();
	const navigate = useNavigate();

	const nameRef = useRef();
	const imgRef = useRef();
	const descriptionRef = useRef();
	const ingredientsRef = useRef();
	const instructionsRef = useRef();

	useEffect(() => {
		RecipesService.getById(id)
			.then((response) => {
				if (response instanceof ApiException) {
					setFlagMessage({
						isVisible: true,
						message: "Erro ao encontrar a receita!",
						subMessage: "Talvez ela não exista.",
					});
					navigate("/chef");
				} else {
					setRecipe(response);

					if (response) {
						if (nameRef.current) nameRef.current.value = response.name;
						if (imgRef.current) imgRef.current.value = response.img;
						if (descriptionRef.current)
							descriptionRef.current.value = response.description;
						if (ingredientsRef.current)
							ingredientsRef.current.value = response.ingredients.join(",");
						if (instructionsRef.current)
							instructionsRef.current.value = response.instructions.join(",");
					}
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id, navigate, setFlagMessage]);

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
					uid: user.uid,
					displayName: user.displayName,
				},
				createdAt: recipe.createdAt,
				lastUpdate: new Date(),
			};

			const response = await RecipesService.updateById(id, editedRecipe);
			if (response instanceof ApiException) {
				setFlagMessage({
					isVisible: true,
					message: "Erro ao editar receita!",
					subMessage: "Ocorreu algo inesperado ao tentar atualizá-la.",
				});
			} else {
				setFlagMessage({
					isVisible: true,
					message: "Receita editada!",
					subMessage: "Agora todos tem a versão atualizada. 😉",
				});
			}
			navigate("/chef");
		}
	};

	return user && recipe.author && recipe.author.id === user.id ? (
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
