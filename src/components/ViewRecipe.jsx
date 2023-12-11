import React, { useContext, useState, useEffect } from "react";
import RecipesContext from "../context/RecipesContext";
import List from "./layout/List";

function ViewRecipe({ recipeId }) {
	const { recipes } = useContext(RecipesContext);
	const [loading, setLoading] = useState(true);
	const [recipe, setRecipe] = useState({});

	useEffect(() => {
		setLoading(true);
		if (recipes) {
			setRecipe(recipes[recipeId]);
		}
		setLoading(false);
	}, [recipeId, recipes]);

	if (loading || !recipe) {
		return;
	}

	const { name, img, description, ingredients, instructions } = recipe;

	return (
		<div className="view-recipe">
			<div className="img">
				<img src={img} alt={name} />
			</div>
			<div className="view-recipe-description">
				<div>
					<h1>{name}</h1>
					<p>{description}</p>
				</div>
				<List title="Ingredientes" list={ingredients} type="disc" />
				<List title="Modo de preparo" list={instructions} type="number" />
			</div>
		</div>
	);
}

export default ViewRecipe;
