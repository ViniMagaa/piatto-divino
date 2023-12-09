import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import RecipesContextProvider from "./context/RecipesContextProvider";

function App() {
	return (
		<RecipesContextProvider>
			<BrowserRouter>
				<Header />
				<Main />
			</BrowserRouter>
		</RecipesContextProvider>
	);
}

export default App;
