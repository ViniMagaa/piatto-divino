import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import RecipesContextProvider from "./context/RecipesContextProvider";

function App() {
	return (
		<BrowserRouter>
			<RecipesContextProvider>
				<Header />
				<Main />
			</RecipesContextProvider>
		</BrowserRouter>
	);
}

export default App;
