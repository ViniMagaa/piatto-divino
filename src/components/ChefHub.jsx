import { useContext } from "react";
import RecipesContext from "../context/RecipesContext";
import RecipeContainer from "./RecipeContainer";

function ChefHub() {
	const { user, recipes } = useContext(RecipesContext);
	const userRecipes = recipes.filter((recipe) => {
		return recipe.author.id === user.id;
	});

	return (
		<>
			<h1>Olá, chef {user.name}!</h1>
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
