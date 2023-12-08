import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Recipe from "./components/pages/Recipe";
import Recipes from "./components/pages/Recipes";
import RecipesContextProvider from "./context/RecipesContextProvider";
import About from "./components/pages/About";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import ChefHub from "./components/pages/ChefHub";

function App() {
	return (
		<RecipesContextProvider>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/receitas" element={<Recipes />} />
						<Route path="/receitas/:id" element={<Recipe />} />
						<Route path="/sobre" element={<About />} />
						<Route path="/chef" element={<ChefHub />} />
						<Route path="/chef/cadastrar" element={<Register />} />
						<Route path="/chef/entrar" element={<Login />} />
					</Routes>
				</main>
			</BrowserRouter>
		</RecipesContextProvider>
	);
}

export default App;
