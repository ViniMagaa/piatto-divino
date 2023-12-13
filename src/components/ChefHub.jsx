import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RecipesContext from "../context/RecipesContext";
import RecipeContainer from "./RecipeContainer";
import Button from "./layout/Button";

function ChefHub() {
	const { user, recipes } = useContext(RecipesContext);
	const [userRecipes, setUserRecipes] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const updatedUserRecipes = recipes.filter(
			(recipe) => recipe.author && recipe.author.id === user.id
		);
		setUserRecipes(updatedUserRecipes);
	}, [recipes, user.id]);

	return (
		<>
			<h1>Olá, chef {user.name}!</h1>
			<Button handleClick={() => navigate("/chef/criar")}>
				Publicar uma receita
			</Button>
			<section>
				<h2>Suas receitas</h2>
				<div className="recipes-container">
					{userRecipes &&
						userRecipes.map((recipe) => (
							<RecipeContainer key={recipe.id} recipe={recipe} />
						))}
				</div>
			</section>
		</>
	);
}

export default ChefHub;
