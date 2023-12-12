import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import RecipesContext from "../context/RecipesContext";
import RecipeContainer from "./RecipeContainer";
import Button from "./layout/Button";

function ChefHub() {
	const { user, recipes } = useContext(RecipesContext);
	
	const userRecipes = recipes.filter((recipe) => {
		return recipe.author && recipe.author.id === user.id;
	});

	const navigate = useNavigate();

	return (
		<>
			<h1>Olá, chef {user.name}!</h1>
			<Button handleClick={() => navigate("/chef/criar")}>
				Publicar uma receita
			</Button>
			<section>
				<h2>Suas receitas</h2>
				<div className="recipes-container">
					{userRecipes.map((recipe) => (
						<RecipeContainer key={recipe.id} recipe={recipe} />
					))}
				</div>
			</section>
		</>
	);
}

export default ChefHub;
