import { useContext, useEffect } from "react";

import RecipesContext from "../../contexts/RecipesContext";

import "./FlagMessage.css";

export const FlagMessage = () => {
	const { flagMessage, setFlagMessage } = useContext(RecipesContext);

	useEffect(() => {
		if (!flagMessage.isVisible) return;

		const timer = setTimeout(() => {
			setFlagMessage({
				isVisible: false,
				message: "",
				subMessage: "",
			});
		}, 4900);

		return () => clearTimeout(timer);
	}, [flagMessage.isVisible, setFlagMessage]);

	return (
		flagMessage.isVisible && (
			<div className="flag-message">
				<h2>{flagMessage.message}</h2>
				<p>{flagMessage.subMessage}</p>
			</div>
		)
	);
};
