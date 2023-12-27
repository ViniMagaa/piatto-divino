import { useContext } from "react";

import RecipesContext from "../../shared/contexts/RecipesContext";
import { ChefHub, ContributeRecipes } from "./components";

export const Panel = () => {
	const { isConnected } = useContext(RecipesContext);

	return !isConnected ? <ContributeRecipes /> : <ChefHub />;
};
