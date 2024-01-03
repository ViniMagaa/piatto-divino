import { useEffect, useState } from "react";

import { AuthServices } from "../services/api";
import RecipesContext from "./RecipesContext";

export const RecipesContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [isLoadingConnectedUser, setIsLoadingConnectedUser] = useState(true);
	const [isConnected, setIsConnected] = useState(false);
	const [flagMessage, setFlagMessage] = useState({
		isVisible: false,
		message: "",
		subMessage: "",
	});

	useEffect(() => {
		AuthServices.getLoggedUser()
			.then((loggedUser) => {
				if (loggedUser) {
					setUser(loggedUser);
					setIsConnected(true);
				}
				setIsLoadingConnectedUser(false);
			})
	}, []);

	return (
		<RecipesContext.Provider
			value={{
				user,
				setUser,
				isConnected,
				setIsConnected,
				isLoadingConnectedUser,
				flagMessage,
				setFlagMessage,
			}}
		>
			{children}
		</RecipesContext.Provider>
	);
};
