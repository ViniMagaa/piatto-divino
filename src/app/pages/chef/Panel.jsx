import { useAppContext } from "../../shared/hooks";
import { ChefHub, ContributeRecipes } from "./components";

export const Panel = () => {
	const { isConnected, isLoadingConnectedUser } = useAppContext();

	if (!isLoadingConnectedUser) {
		return !isConnected ? <ContributeRecipes /> : <ChefHub />;
	} else return undefined;
};
