import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import RecipesContext from "../contexts/RecipesContext";
import { ApiException } from "../services/api";
import { RecipesService } from "../services/api/recipes/Recipes.service";
import { Button, RecipeContainer } from "./";

export const MainRecipes = () => {
	const { setFlagMessage } = useContext(RecipesContext);
	const [recipes, setRecipes] = useState([]);

	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		RecipesService.getAll()
			.then((response) => {
				if (response instanceof ApiException) {
					setFlagMessage({
						isVisible: true,
						message: "Erro ao buscar receitas!",
						subMessage: "Ocorreu algo inesperado.",
					});
				} else {
					setRecipes(response);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, [setFlagMessage]);

	const mainRecipes = useMemo(() => {
		return recipes.filter((element) => element.id !== id).slice(0, 4);
	}, [recipes, id]);

	return (
		<section>
			<h2>Principais receitas</h2>
			<div className="recipes-container">
				{mainRecipes.map((recipe) => (
					<RecipeContainer key={recipe.id} recipe={recipe} />
				))}
			</div>
			<div className="buttons-container">
				<Button handleClick={() => navigate("/receitas")}>Mais receitas</Button>
			</div>
		</section>
	);
};
