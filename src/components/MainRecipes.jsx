import { useContext } from "react";
import RecipeContainer from "./RecipeContainer";
import RecipesContext from "../context/RecipesContext";

function MainRecipes() {
	const { recipes } = useContext(RecipesContext);

	return (
		<section>
			<h2>Principais receitas</h2>
			<div className="recipes-container">
				{recipes.map((recipe) => {
					if (recipe.id <= 4) {
						return (
							<RecipeContainer
								key={recipe.id}
								name={recipe.name}
								img={recipe.img}
							/>
						);
					}
				})}
			</div>
		</section>
	);
}

export default MainRecipes;
