import { FlagMessage } from "../../";
import { AppRoutes } from "../../../../routes";

import "./Main.css";

export const Main = () => {
	return (
		<main>
			<FlagMessage />
			<AppRoutes />
		</main>
	);
};
