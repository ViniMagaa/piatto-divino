import { useParams } from "react-router-dom";

import MainRecipes from "../MainRecipes";
import ViewRecipe from "../ViewRecipe";

function Recipe() {
	const { id } = useParams();

	return (
		<section className="recipe">
			<ViewRecipe recipeId={id} />
			<MainRecipes />
		</section>
	);
}

export default Recipe;
