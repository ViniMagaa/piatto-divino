import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import RecipesContext from "../context/RecipesContext";
import RecipeContainer from "./RecipeContainer";
import Button from "./layout/Button";

function MainRecipes() {
	const { recipes } = useContext(RecipesContext);
	const { id } = useParams();

	const navigate = useNavigate();

	function shuffleArray(array, index) {
		const newArray = array.filter((element) => element.id !== Number(index));
		for (let i = 0; i < newArray.length - 1; i++) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}
		return newArray;
	}

	const randomRecipes = shuffleArray(recipes, id);

	return (
		<section>
			<h2>Principais receitas</h2>
			<div className="recipes-container">
				{randomRecipes.map((recipe, index) => {
					if (index < 5) {
						return (
							<RecipeContainer
								key={recipe.id}
								id={recipe.id}
								name={recipe.name}
								author={recipe.author}
								img={recipe.img}
							/>
						);
					} else return undefined;
				})}
			</div>
			<div className="buttons-container">
				<Button handleClick={() => navigate("/receitas")}>Mais receitas</Button>
			</div>
		</section>
	);
}

export default MainRecipes;
