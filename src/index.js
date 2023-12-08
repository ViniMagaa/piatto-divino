import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import RecipesContextProvider from "./context/RecipesContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<RecipesContextProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</RecipesContextProvider>
);
