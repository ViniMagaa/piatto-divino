import { useContext } from "react";
import { useParams } from "react-router-dom";

import RecipesContext from "../../context/RecipesContext";
import MainRecipes from "../MainRecipes";
import ViewRecipe from "../ViewRecipe";

function Recipe() {
	const { recipes } = useContext(RecipesContext);
	const { id } = useParams();

	return (
		<section className="recipe">
			<ViewRecipe recipe={recipes[id]} />
			<MainRecipes />
		</section>
	);
}

export default Recipe;
