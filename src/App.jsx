import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import RecipesContextProvider from "./context/RecipesContextProvider";
import Footer from "./components/layout/Footer";

function App() {
	return (
		<BrowserRouter>
			<RecipesContextProvider>
				<Header />
				<Main />
				<Footer />
			</RecipesContextProvider>
		</BrowserRouter>
	);
}

export default App;
