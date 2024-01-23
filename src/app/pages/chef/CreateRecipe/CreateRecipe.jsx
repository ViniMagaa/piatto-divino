import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoadingPan } from "../../../shared/components";
import { useAppContext } from "../../../shared/hooks";
import { ApiException } from "../../../shared/services/api/ApiException";
import { RecipesService } from "../../../shared/services/api/recipes/Recipes.service";
import { RecipeForm } from "../components";

export const CreateRecipe = () => {
	const { user, setFlagMessage } = useAppContext();

	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const publishRecipe = async (recipeToCreate) => {
		setIsLoading(true);

		const newRecipe = {
			...recipeToCreate,
			author: {
				uid: user.uid,
				displayName: user.displayName,
			},
			createdAt: new Date(),
			lastUpdate: new Date(),
		};

		const response = await RecipesService.create(newRecipe);
		if (response instanceof ApiException) {
			setFlagMessage({
				isVisible: true,
				message: "Erro ao publicar receita!",
				subMessage: "Ocorreu um erro, tente novamente.",
			});
		} else {
			setFlagMessage({
				isVisible: true,
				message: "Receita publicada!",
				subMessage: "Agradecemos a sua contribuição. 😉",
			});
			navigate("/chef");
		}
		setIsLoading(false);
	};

	return (
		<section>
			<h1>Publique sua receita</h1>
			{!isLoading ? <RecipeForm whenSubmited={publishRecipe} /> : <LoadingPan />}
		</section>
	);
};
