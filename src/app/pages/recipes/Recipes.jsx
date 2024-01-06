import { useEffect, useState } from "react";
import {
	LoadingRecipesContainer,
	RecipeContainer,
} from "../../shared/components";
import { useAppContext } from "../../shared/hooks";
import { ApiException, RecipesService } from "../../shared/services/api";

export const Recipes = () => {
	const { setFlagMessage } = useAppContext();
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		RecipesService.getAll()
			.then((response) => {
				if (response instanceof ApiException) {
					setFlagMessage({
						isVisible: true,
						message: "Erro ao buscar receitas!",
						subMessage: "Ocorreu algo inesperado.",
					});
				} else {
					setRecipes(response);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, [setFlagMessage]);

	return (
		<section>
			<h1>Todas as receitas</h1>
			<div className="recipes-container">
				{recipes.length === 0 ? (
					<LoadingRecipesContainer amount={8} />
				) : (
					recipes.map((recipe) => (
						<RecipeContainer key={recipe.id} recipe={recipe} />
					))
				)}
			</div>
		</section>
	);
};
