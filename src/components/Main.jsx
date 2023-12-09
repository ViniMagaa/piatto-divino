import { useContext } from "react";

import RecipesContext from "../context/RecipesContext";
import AppRoutes from "../routes/AppRoutes";
import FlagMessage from "./layout/FlagMessage";

function Main() {
	const { flagMessage } = useContext(RecipesContext);

	return (
		<main>
			{flagMessage.isVisible && (
				<FlagMessage
					message={flagMessage.message}
					subMessage={flagMessage.subMessage}
				/>
			)}
			<AppRoutes />
		</main>
	);
}

export default Main;
