import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA6HizYhUSowQYvmPQBHCxQWKCncuPjBw0",
	authDomain: "piatto-divino.firebaseapp.com",
	projectId: "piatto-divino",
	storageBucket: "piatto-divino.appspot.com",
	messagingSenderId: "788778410830",
	appId: "1:788778410830:web:38e29982bfc397bb16b41f",
	measurementId: "G-GNE9PFY8P1",
};
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebaseAuth.initializeAuth(app, {
	persistence: firebaseAuth.browserLocalPersistence,
});

export const database = getFirestore(app);
