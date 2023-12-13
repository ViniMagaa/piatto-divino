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

	const createRecipe = async (newRecipe) => {
		setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);

		try {
			await fetch("http://localhost:5000/recipes", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newRecipe),
			});
		} catch (error) {
			console.error(error);
		}
	};

	const editRecipe = async (id, editedRecipe) => {
		setRecipes((prevRecipes) =>
			prevRecipes.map((prevRecipe) =>
				prevRecipe.id === id ? editedRecipe : prevRecipe
			)
		);

		try {
			await fetch(`http://localhost:5000/recipes/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(editedRecipe),
			});
		} catch (error) {
			console.error(error);
		}
	};

	const deleteRecipe = async (id) => {
		setRecipes((prevRecipes) =>
			prevRecipes.filter((prevRecipe) => prevRecipe.id !== id)
		);

		try {
			await fetch(`http://localhost:5000/recipes/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});
		} catch (error) {
			console.error(error);
		}
	};

	const data = {
		user,
		setUser,
		recipes,
		setRecipes,
		isConnected,
		setIsConnected,
		flagMessage,
		setFlagMessage,
		createRecipe,
		editRecipe,
		deleteRecipe,
	};

	return (
		<RecipesContext.Provider value={data}>{children}</RecipesContext.Provider>
	);
}

export default RecipesContextProvider;
