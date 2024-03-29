import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppContext } from "../../hooks";
import { ApiException } from "../../services/api";
import { RecipesService } from "../../services/api/recipes/Recipes.service";
import { Button, LoadingRecipesContainer, RecipeContainer } from "..";

export const MainRecipes = () => {
	const { setFlagMessage } = useAppContext();
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
		return recipes.filter((element) => element.id !== id).slice(0, 6);
	}, [recipes, id]);

	return (
		<section>
			<h2>Principais receitas</h2>
			<div className="recipes-container">
				{recipes.length === 0 ? (
					<LoadingRecipesContainer amount={6} />
				) : (
					mainRecipes.map((recipe) => (
						<RecipeContainer key={recipe.id} recipe={recipe} />
					))
				)}
			</div>
			<div className="buttons-container">
				<Button handleClick={() => navigate("/receitas")}>Mais receitas</Button>
			</div>
		</section>
	);
};
