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
						<RecipeContainer
							key={recipe.id}
							id={recipe.id}
							name={recipe.name}
							author={recipe.author}
							img={recipe.img}
						/>
					))}
				</div>
			</section>
		</>
	);
}

export default ChefHub;
