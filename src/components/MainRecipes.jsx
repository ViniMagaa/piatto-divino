import { useContext } from "react";
import RecipeContainer from "./RecipeContainer";
import RecipesContext from "../context/RecipesContext";

function MainRecipes() {
	const { recipes } = useContext(RecipesContext);

	function shuffleArray(array) {
		const newArray = [...array]; // Create a copy
		for (let i = 0; i < newArray.length - 1; i++) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Replace
		}
		return newArray;
	}

	const randomRecipes = shuffleArray(recipes);

	return (
		<section>
			<h2>Principais receitas</h2>
			<div className="recipes-container">
				{randomRecipes.map((recipe, index) => {
					if (index < 5) {
						return (
							<RecipeContainer
								key={recipe.id}
								id={recipe.id}
								name={recipe.name}
								img={recipe.img}
							/>
						);
					} else return undefined;
				})}
			</div>
		</section>
	);
}

export default MainRecipes;
