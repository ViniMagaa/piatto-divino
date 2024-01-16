import { useParams } from "react-router-dom";

import { MainRecipes } from "../../shared/components";
import { CommentsSection, ViewRecipeContainer } from "./components";

export const Recipe = () => {
	const { id } = useParams();

	return (
		<section>
			<ViewRecipeContainer recipeId={id} />
			<CommentsSection recipeId={id} />
			<MainRecipes />
		</section>
	);
};
