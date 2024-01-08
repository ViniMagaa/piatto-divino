import { useAppContext } from "../../shared/hooks";
import { AdminChefHub, ChefHub, ContributeRecipes } from "./components";

export const Panel = () => {
	const { user, isConnected, isLoadingConnectedUser, ADMIN_UID } =
		useAppContext();

	if (!isLoadingConnectedUser) {
		const chefPanel = user.uid === ADMIN_UID ? <AdminChefHub /> : <ChefHub />;

		return !isConnected ? <ContributeRecipes /> : chefPanel;
	} else return undefined;
};
