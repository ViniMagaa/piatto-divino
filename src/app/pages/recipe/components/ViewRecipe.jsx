import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { List } from "../../../shared/components";
import RecipesContext from "../../../shared/contexts/RecipesContext";
import { ApiException, RecipesService } from "../../../shared/services/api";

import "./ViewRecipe.css";

export const ViewRecipe = ({ recipeId }) => {
	const { setFlagMessage } = useContext(RecipesContext);
	const [recipe, setRecipe] = useState({});

	const navigate = useNavigate();

	useEffect(() => {
		RecipesService.getById(recipeId).then((response) => {
			if (response instanceof ApiException) {
				navigate("/");
				setFlagMessage({
					isVisible: true,
					message: "Erro ao encontrar a receita!",
					subMessage: "Talvez ela não exista.",
				});
			} else {
				setRecipe(response);
			}
		});
	}, [recipeId, navigate, setFlagMessage]);

	if (Object.keys(recipe).length === 0) return;

	const { name, img, description, ingredients, instructions, author } = recipe;

	return (
		recipe && (
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
						Por: <span className="bold-italic">{author.displayName}</span>
					</small>
				</div>
			</div>
		)
	);
};
