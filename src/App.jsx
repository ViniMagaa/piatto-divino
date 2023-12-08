import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Recipes from "./components/pages/Recipes";
import RecipesContext from "./context/RecipesContext";

function App() {
	const { setRecipes } = useContext(RecipesContext);

	useEffect(() => {
		fetch("http://localhost:5000/recipes", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => resp.json())
			.then((data) => {
				setRecipes(data);
			})
			.catch((err) => console.log(err));
	}, [setRecipes]);

	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/receitas" element={<Recipes />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
