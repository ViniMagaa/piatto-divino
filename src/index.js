import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyA6HizYhUSowQYvmPQBHCxQWKCncuPjBw0",
	authDomain: "piatto-divino.firebaseapp.com",
	projectId: "piatto-divino",
	storageBucket: "piatto-divino.appspot.com",
	messagingSenderId: "788778410830",
	appId: "1:788778410830:web:38e29982bfc397bb16b41f",
	measurementId: "G-GNE9PFY8P1",
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
