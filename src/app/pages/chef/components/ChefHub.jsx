import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RecipesContext from "../../../shared/contexts/RecipesContext";
import { Button, RecipeContainer } from "../../../shared/components";

export const ChefHub = () => {
	const { user, recipes } = useContext(RecipesContext);

	const [userRecipes, setUserRecipes] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) return;
		const updatedUserRecipes = recipes.filter(
			(recipe) => recipe.author && recipe.author.id === user.id
		);
		setUserRecipes(updatedUserRecipes);
	}, [recipes, user]);

	return (
		user && (
			<section>
				<h1>Olá, chef {user.name}!</h1>
				<Button handleClick={() => navigate("/chef/criar")}>
					Publicar uma receita
				</Button>
				<h2>Suas receitas</h2>
				{userRecipes.length > 0 ? (
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
