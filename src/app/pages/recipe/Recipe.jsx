import { useParams } from "react-router-dom";

import { MainRecipes } from "../../shared/components";
import { ViewRecipe } from "./components/ViewRecipe";

export const Recipe = () => {
	const { id } = useParams();

	return (
		<section className="recipe">
			<ViewRecipe recipeId={id} />
			<MainRecipes />
		</section>
	);
};
