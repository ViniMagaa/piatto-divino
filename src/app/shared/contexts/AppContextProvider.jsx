import { useEffect, useState } from "react";

import { AuthServices } from "../services/api";
import AppContext from "./AppContext";

export const AppContextProvider = ({ children }) => {
	const ADMIN_UID = "lStuRIC8PBZOnPt1aOKHuP3oefk1";

	const [user, setUser] = useState({});
	const [isLoadingConnectedUser, setIsLoadingConnectedUser] = useState(true);
	const [isConnected, setIsConnected] = useState(false);
	const [flagMessage, setFlagMessage] = useState({
		isVisible: false,
		message: "",
		subMessage: "",
	});

	useEffect(() => {
		AuthServices.getLoggedUser().then((loggedUser) => {
			if (loggedUser) {
				setUser(loggedUser);
				setIsConnected(true);
			}
			setIsLoadingConnectedUser(false);
		});
	}, []);

	return (
		<AppContext.Provider
			value={{
				user,
				setUser,
				isConnected,
				setIsConnected,
				isLoadingConnectedUser,
				flagMessage,
				setFlagMessage,
				ADMIN_UID,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
