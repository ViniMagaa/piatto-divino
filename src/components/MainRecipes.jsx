import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import RecipesContext from "../context/RecipesContext";
import RecipeContainer from "./RecipeContainer";
import Button from "./layout/Button";

function MainRecipes() {
	const { recipes } = useContext(RecipesContext);
	const { id } = useParams();

	const navigate = useNavigate();

	function shuffleArray(array) {
		const newArray = [...array];
		for (let i = 0; i < newArray.length - 1; i++) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}
		return newArray;
	}

	const mainRecipes = shuffleArray(recipes)
		.filter((element) => element.id !== Number(id))
		.slice(0, 4);

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
}

export default MainRecipes;
