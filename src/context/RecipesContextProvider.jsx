import { useState } from "react";
import RecipesContext from "./RecipesContext";

function RecipesContextProvider({ children }) {
	const [recipes, setRecipes] = useState([]);

	const data = {
		recipes,
		setRecipes,
	};

	return (
		<RecipesContext.Provider value={data}>{children}</RecipesContext.Provider>
	);
}

export default RecipesContextProvider;
