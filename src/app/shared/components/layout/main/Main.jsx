import { FlagMessage, LoadingPan } from "../../";
import { AppRoutes } from "../../../../routes";
import { useAppContext } from "../../../hooks";

import "./Main.css";

export const Main = () => {
	const { isLoadingConnectedUser } = useAppContext();

	return (
		<main>
			<FlagMessage />
			{isLoadingConnectedUser ? <LoadingPan /> : <AppRoutes />}
		</main>
	);
};
