import AppRoutes from "../routes/AppRoutes";
import FlagMessage from "./layout/FlagMessage";

function Main() {
	return (
		<main>
			<FlagMessage />
			<AppRoutes />
		</main>
	);
}

export default Main;
