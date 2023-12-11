import { Route, Routes } from "react-router-dom";

import About from "../components/pages/About";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Panel from "../components/pages/Panel";
import Recipe from "../components/pages/Recipe";
import Recipes from "../components/pages/Recipes";
import Register from "../components/pages/Register";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/receitas" element={<Recipes />} />
			<Route path="/receitas/:id" element={<Recipe />} />
			<Route path="/sobre" element={<About />} />
			<Route path="/chef" element={<Panel />} />
			<Route path="/chef/cadastrar" element={<Register />} />
			<Route path="/chef/entrar" element={<Login />} />
		</Routes>
	);
}

export default AppRoutes;
