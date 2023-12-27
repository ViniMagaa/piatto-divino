import React, { useContext, useEffect, useState } from "react";

import { List } from "../../../shared/components";
import RecipesContext from "../../../shared/contexts/RecipesContext";

import "./ViewRecipe.css";

export const ViewRecipe = ({ recipeId }) => {
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

	const { name, img, description, ingredients, instructions, author } = recipe;

	return (
		<div className="view-recipe">
			<div className="image-container">
				<img src={img} alt={name} />
			</div>
			<div className="view-recipe-description">
				<div>
					<h1>{name}</h1>
					<p>{description}</p>
				</div>
				<List title="Ingredientes" list={ingredients} type="disc" />
				<List title="Modo de preparo" list={instructions} type="number" />
				<small>
					Por: <span className="bold-italic">{author.name}</span>
				</small>
			</div>
		</div>
	);
};
