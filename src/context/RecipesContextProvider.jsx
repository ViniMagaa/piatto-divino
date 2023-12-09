import { useEffect, useState } from "react";
import RecipesContext from "./RecipesContext";

function RecipesContextProvider({ children }) {
	const [user, setUser] = useState({});
	const [recipes, setRecipes] = useState([]);
	const [isConnected, setIsConnected] = useState(false);
	const [flagMessage, setFlagMessage] = useState({
		isVisible: false,
		message: "",
		subMessage: "",
	});

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
		user,
		setUser,
		recipes,
		setRecipes,
		isConnected,
		setIsConnected,
		flagMessage,
		setFlagMessage,
	};

	return (
		<RecipesContext.Provider value={data}>{children}</RecipesContext.Provider>
	);
}

export default RecipesContextProvider;
