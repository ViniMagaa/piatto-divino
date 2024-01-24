import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { List, RecipeInformationSummary } from "../../../../shared/components";
import { useAppContext } from "../../../../shared/hooks";
import { ApiException, RecipesService } from "../../../../shared/services/api";
import { LoadingViewRecipeContainer } from "./LoadingViewRecipeContainer/LoadingViewRecipeContainer";
import { RecipeInformation } from "./RecipeInformation/RecipeInformation";

import "./ViewRecipeContainer.css";

export const ViewRecipeContainer = ({ recipeId }) => {
	const { setFlagMessage } = useAppContext();
	const [recipe, setRecipe] = useState({});

	const navigate = useNavigate();

	useEffect(() => {
		RecipesService.getById(recipeId).then((response) => {
			if (response instanceof ApiException || !response.name) {
				navigate("/");
				setFlagMessage({
					isVisible: true,
					message: "Erro ao buscar receita!",
					subMessage: "Não foi possível encontrá-la.",
				});
				return;
			} else {
				setRecipe(response);
			}
		});
	}, [recipeId, navigate, setFlagMessage]);

	if (Object.keys(recipe).length === 0) {
		return <LoadingViewRecipeContainer />;
	}

	const { name, img, description, ingredients, instructions } = recipe;

	return (
		<div className="view-recipe">
			<div className="image-container">
				<img src={img} alt={name} />
			</div>
			<div className="view-recipe-description">
				<div>
					<h1>{name}</h1>
					<p>{description}</p>
				</div>
				<RecipeInformationSummary recipe={recipe} />
				<List title="Ingredientes" list={ingredients} type="disc" />
				<List title="Modo de preparo" list={instructions} type="number" />
				<div>
					<h3>Informações da receita</h3>
					<RecipeInformation recipe={recipe} />
				</div>
			</div>
		</div>
	);
};
