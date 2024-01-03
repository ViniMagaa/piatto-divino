import * as firebaseAuth from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { ApiException } from "../ApiException";

const login = (email, password) => {
	return firebaseAuth
		.signInWithEmailAndPassword(auth, email, password)
		.catch((error) => new ApiException(error));
};

const register = (email, password) => {
	return firebaseAuth
		.createUserWithEmailAndPassword(auth, email, password)
		.catch((error) => new ApiException(error));
};

const updateProfile = (dataToUpdate) => {
	return firebaseAuth
		.updateProfile(auth.currentUser, dataToUpdate)
		.catch((error) => new ApiException(error));
};

const logout = () => {
	return firebaseAuth.signOut().catch((error) => new ApiException(error));
};

const getLoggedUser = () => {
	return new Promise((resolve) => {
		firebaseAuth
			.onAuthStateChanged(auth, (user) => resolve(user))
	});
};

export const AuthServices = {
	login,
	register,
	updateProfile,
	logout,
	getLoggedUser,
};
