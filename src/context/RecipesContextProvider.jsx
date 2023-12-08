import { useEffect, useState } from "react";
import RecipesContext from "./RecipesContext";

function RecipesContextProvider({ children }) {
	const [recipes, setRecipes] = useState([]);

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

	const data = {
		recipes,
		setRecipes,
	};

	return (
		<RecipesContext.Provider value={data}>{children}</RecipesContext.Provider>
	);
}

export default RecipesContextProvider;
