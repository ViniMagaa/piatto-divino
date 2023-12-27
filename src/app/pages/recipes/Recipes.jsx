import { useContext } from "react";

import { RecipeContainer } from "../../shared/components";
import RecipesContext from "../../shared/contexts/RecipesContext";

export const Recipes = () => {
	const { recipes } = useContext(RecipesContext);

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
