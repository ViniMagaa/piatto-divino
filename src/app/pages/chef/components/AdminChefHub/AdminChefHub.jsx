import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../../shared/components";
import { useAppContext } from "../../../../shared/hooks";
import { ApiException, RecipesService } from "../../../../shared/services/api";
import { RecipesList } from "../";

export const AdminChefHub = () => {
	const { user, setFlagMessage } = useAppContext();

	const [recipes, setRecipes] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		if (!user) return;
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
	}, [user, setFlagMessage]);

	return (
		user &&
		recipes && (
			<section>
				<h1>Olá, chef {user.displayName}!</h1>
				<Button handleClick={() => navigate("/chef/criar")}>
					Publicar uma receita
				</Button>
				<RecipesList
					title={"Suas Receitas"}
					recipes={recipes.filter((recipe) => recipe.author.uid === user.uid)}
				/>
				<RecipesList
					title={"Receitas dos outros Chefs"}
					recipes={recipes.filter((recipe) => recipe.author.uid !== user.uid)}
				/>
			</section>
		)
	);
};
