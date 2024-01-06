import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	Button,
	LoadingRecipesContainer,
	RecipeContainer,
} from "../../../shared/components";
import { useAppContext } from "../../../shared/hooks";
import { ApiException, RecipesService } from "../../../shared/services/api";

export const ChefHub = () => {
	const { user, setFlagMessage } = useAppContext();

	const [userRecipes, setUserRecipes] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) return;
		RecipesService.getAllByUserId(user.uid)
			.then((response) => {
				if (response instanceof ApiException) {
					setFlagMessage({
						isVisible: true,
						message: "Erro ao buscar receitas!",
						subMessage: "Ocorreu algo inesperado.",
					});
				} else {
					setUserRecipes(response);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, [user, setFlagMessage]);

	return (
		user && (
			<section>
				<h1>Olá, chef {user.displayName}!</h1>
				<Button handleClick={() => navigate("/chef/criar")}>
					Publicar uma receita
				</Button>
				<h2>Suas receitas</h2>
				{!userRecipes.length ? (
					<div className="recipes-container">
						<LoadingRecipesContainer amount={4} />
					</div>
				) : userRecipes.length > 0 ? (
					<div className="recipes-container">
						{userRecipes.map((recipe) => (
							<RecipeContainer key={recipe.id} recipe={recipe} />
						))}
					</div>
				) : (
					<p>Você não possui receitas. Comece publicando uma!</p>
				)}
			</section>
		)
	);
};
