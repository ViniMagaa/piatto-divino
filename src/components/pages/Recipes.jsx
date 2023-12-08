import { useContext } from "react";
import RecipeContainer from "../RecipeContainer";
import RecipesContext from "../../context/RecipesContext";

function Recipes() {
	const { recipes } = useContext(RecipesContext);

	return (
		<section>
			<h1>Todas as receitas</h1>
			<div className="recipes-container">
				{recipes.map((recipe) => {
					return (
						<RecipeContainer
							key={recipe.id}
							id={recipe.id}
							name={recipe.name}
							img={recipe.img}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Recipes;
