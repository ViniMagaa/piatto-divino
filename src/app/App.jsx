import { BrowserRouter } from "react-router-dom";

import { Header, Main, Footer } from "./shared/components/layout";
import { RecipesContextProvider } from "./shared/contexts/RecipesContextProvider";

export default function App() {
	return (
		<BrowserRouter>
			<RecipesContextProvider>
				<Header />
				<Main />
				<Footer />
			</RecipesContextProvider>
		</BrowserRouter>
	);
};
