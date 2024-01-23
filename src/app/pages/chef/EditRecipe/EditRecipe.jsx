import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, LoadingPan, PageNotFound } from "../../../shared/components";
import { useAppContext } from "../../../shared/hooks";
import { ApiException } from "../../../shared/services/api/ApiException";
import { RecipesService } from "../../../shared/services/api/recipes/Recipes.service";
import { RecipeForm } from "../components";

export const EditRecipe = () => {
	const { user, setFlagMessage, ADMIN_UID } = useAppContext();
	const [recipe, setRecipe] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const { id } = useParams();
	const navigate = useNavigate();

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
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id, navigate, setFlagMessage]);

	if (!user || recipe === null) return <LoadingPan />;
	if (!recipe.name) return <PageNotFound />;

	const isAuthor = recipe.author.uid === user.uid;
	const isAdmin = user.uid === ADMIN_UID;

	const submitForm = async (recipeToUpdate) => {
		setIsLoading(true);

		const editedRecipe = {
			...recipeToUpdate,
			author: {
				uid: recipe.author.uid,
				displayName: isAdmin ? recipe.author.displayName : user.displayName,
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
			navigate("/chef");
		}
		setIsLoading(false);
	};

	return isAuthor || isAdmin ? (
		<section>
			<h1>Edite sua receita</h1>
			{!isLoading ? (
				<RecipeForm recipe={recipe} whenSubmited={submitForm} />
			) : (
				<LoadingPan />
			)}
		</section>
	) : (
		<section>
			<h1>Essa receita não pode ser editada!</h1>
			<Button handleClick={() => navigate("/chef")}>Voltar ao início</Button>
		</section>
	);
};
