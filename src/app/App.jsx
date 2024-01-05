import { BrowserRouter } from "react-router-dom";

import { Header, Main, Footer } from "./shared/components/layout";
import { AppContextProvider } from "./shared/contexts";

export default function App() {
	return (
		<BrowserRouter>
			<AppContextProvider>
				<Header />
				<Main />
				<Footer />
			</AppContextProvider>
		</BrowserRouter>
	);
}
