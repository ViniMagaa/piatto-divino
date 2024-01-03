import { useState } from "react";

import RecipesContext from "./RecipesContext";

export const RecipesContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [isConnected, setIsConnected] = useState(false);
	const [flagMessage, setFlagMessage] = useState({
		isVisible: false,
		message: "",
		subMessage: "",
	});

	return (
		<RecipesContext.Provider
			value={{
				user,
				setUser,
				isConnected,
				setIsConnected,
				flagMessage,
				setFlagMessage,
			}}
		>
			{children}
		</RecipesContext.Provider>
	);
};
