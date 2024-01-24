import { RecipeInformationSummary } from "..";
import { RecipeContainerActionButtons } from "./RecipeContainerActionButtons/RecipeContainerActionButtons";

import "./RecipeContainer.css";

export const RecipeContainer = ({ recipe }) => {
	return (
		<div className="recipe-container">
			<div className="image-container">
				<img src={recipe.img} alt={recipe.name} />
			</div>
			<div className="description">
				<div className="information">
					<h3>{recipe.name}</h3>
					<p className="recipe-description">{recipe.description}</p>
					<RecipeInformationSummary recipe={recipe} />
				</div>
				<RecipeContainerActionButtons recipe={recipe} />
			</div>
		</div>
	);
};

export default RecipeContainer;
