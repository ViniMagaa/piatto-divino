import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { About, Home, Login, Panel, Recipe, Recipes, Register } from "../pages";
import { CreateRecipe, EditRecipe } from "../pages/chef";
import RecipesContext from "../shared/contexts/RecipesContext";

export const AppRoutes = () => {
	const { isConnected } = useContext(RecipesContext);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/receitas" element={<Recipes />} />
			<Route path="/receitas/:id" element={<Recipe />} />
			<Route path="/sobre" element={<About />} />
			<Route path="/chef" element={<Panel />} />
			{!isConnected ? (
				<>
					<Route path="/cadastrar" element={<Register />} />
					<Route path="/entrar" element={<Login />} />
				</>
			) : (
				<>
					<Route path="/chef/editar/:id" element={<EditRecipe />} />
					<Route path="/chef/criar" element={<CreateRecipe />} />
				</>
			)}
		</Routes>
	);
};
