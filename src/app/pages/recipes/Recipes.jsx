import { useContext, useEffect, useState } from "react";
import { RecipeContainer } from "../../shared/components";
import RecipesContext from "../../shared/contexts/RecipesContext";
import { ApiException, RecipesService } from "../../shared/services/api";

export const Recipes = () => {
	const { setFlagMessage } = useContext(RecipesContext);
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
				{recipes.map((recipe) => {
					return <RecipeContainer key={recipe.id} recipe={recipe} />;
				})}
			</div>
		</section>
	);
};
