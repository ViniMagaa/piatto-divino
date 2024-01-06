import { useNavigate, useParams } from "react-router-dom";

import { MainRecipes } from "../../shared/components";
import { useEffect, useState } from "react";
import { ApiException, RecipesService } from "../../shared/services/api";
import { useAppContext } from "../../shared/hooks";
import { LoadingViewRecipeContainer, ViewRecipeContainer } from "./components";

export const Recipe = () => {
	const { id } = useParams();
	const { setFlagMessage } = useAppContext();
	const [recipe, setRecipe] = useState({});

	const navigate = useNavigate();

	useEffect(() => {
		RecipesService.getById(id).then((response) => {
			if (response instanceof ApiException) {
				navigate("/");
				setFlagMessage({
					isVisible: true,
					message: "Erro ao encontrar a receita!",
					subMessage: "Talvez ela não exista.",
				});
			} else {
				setRecipe(response);
			}
		});
	}, [id, navigate, setFlagMessage]);

	return (
		<section>
			{Object.keys(recipe).length === 0 ? (
				<LoadingViewRecipeContainer />
			) : (
				<ViewRecipeContainer recipe={recipe} />
			)}
			<MainRecipes />
		</section>
	);
};
