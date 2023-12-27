import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RecipesContext from "./RecipesContext";

const BASE_API_URL = "https://api-piatto-divino.vercel.app";

export const RecipesContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [users, setUsers] = useState([]);
	const [recipes, setRecipes] = useState([]);
	const [isConnected, setIsConnected] = useState(false);
	const [flagMessage, setFlagMessage] = useState({
		isVisible: false,
		message: "",
		subMessage: "",
	});

	const navigate = useNavigate();

	useEffect(() => {
		fetch(`${BASE_API_URL}/recipes`, {
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

		fetch(`${BASE_API_URL}/users`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => resp.json())
			.then((data) => {
				setUsers(data);
			})
			.catch((err) => console.log(err));
	}, []);

	const createRecipe = async (newRecipe) => {
		setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);

		try {
			await fetch(`${BASE_API_URL}/recipes`, {
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
			await fetch(`${BASE_API_URL}/recipes${id}`, {
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
			await fetch(`${BASE_API_URL}/recipes${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});
		} catch (error) {
			console.error(error);
		}
	};

	const register = async (newUser) => {
		setUsers((prevUsers) => [...prevUsers, newUser]);

		try {
			await fetch(`${BASE_API_URL}/users`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newUser),
			});
		} catch (error) {
			console.error(error);
		}
	};

	const login = (user) => {
		loginUser(user.id);

		setFlagMessage({
			isVisible: true,
			message: "Você se conectou!",
			subMessage: "Redirecionando...",
		});

		setTimeout(() => {
			navigate("/chef");
		}, 2000);
	};

	const loginUser = (uId) => {
		localStorage.setItem("u", uId);
		setUser(() => {
			const uIndex = users.findIndex((user) => user.id === uId);
			return users[uIndex];
		});
		setIsConnected(true);
	};

	const disconnectUser = () => {
		localStorage.removeItem("u");
		navigate("/");
		window.location.reload();
	};

	useEffect(() => {
		const storedUserLogin = localStorage.getItem("u");
		if (storedUserLogin) {
			loginUser(storedUserLogin);
		}
	});

	const data = {
		user,
		loginUser,
		users,
		setUsers,
		recipes,
		setRecipes,
		isConnected,
		setIsConnected,
		flagMessage,
		setFlagMessage,
		createRecipe,
		editRecipe,
		deleteRecipe,
		register,
		login,
		disconnectUser,
	};

	return (
		<RecipesContext.Provider value={data}>{children}</RecipesContext.Provider>
	);
};
