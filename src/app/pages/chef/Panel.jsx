import { useContext } from "react";

import RecipesContext from "../../shared/contexts/RecipesContext";
import { ChefHub, ContributeRecipes } from "./components";

export const Panel = () => {
	const { isConnected, isLoadingConnectedUser } = useContext(RecipesContext);

	if (!isLoadingConnectedUser) {
		return !isConnected ? <ContributeRecipes /> : <ChefHub />;
	} else return undefined;
};
