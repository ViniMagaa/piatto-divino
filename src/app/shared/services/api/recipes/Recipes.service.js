import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import { database } from "../../FirebaseConfig";
import { ApiException } from "../ApiException";

const getAll = async () => {
	return getDocs(collection(database, "recipes"))
		.then((snapshot) =>
			snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
		)
		.catch((error) => new ApiException("Erro ao buscar as receitas:" + error));
};

const getById = async (recipeId) => {
	return getDoc(doc(database, "recipes", recipeId))
		.then((docSnapshot) => ({ ...docSnapshot.data(), id: docSnapshot.id }))
		.catch((error) => new ApiException("Erro ao buscar a receita:", error));
};

const getAllByUserId = async (userId) => {
	return getDocs(
		query(collection(database, "recipes"), where("author.uid", "==", userId))
	)
		.then((snapshot) =>
			snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
		)
		.catch(
			(error) =>
				new ApiException("Erro ao buscar as receitas do usuário:", error)
		);
};

const getNameAndId = async () => {
	return getDocs(collection(database, "recipes"))
		.then((snapshot) =>
			snapshot.docs.map((doc) => ({ name: doc.data().name, id: doc.id }))
		)
		.catch((error) => new ApiException("Erro ao buscar as receitas:", error));
};

const create = async (recipeToCreate) => {
	return addDoc(collection(database, "recipes"), recipeToCreate)
		.then((response) => {
			return response;
		})
		.catch((error) => new ApiException("Erro ao criar a receita:", error));
};

const updateById = async (id, recipeDataToUpdate) => {
	return updateDoc(doc(database, "recipes", id), recipeDataToUpdate)
		.then((response) => {
			return response;
		})
		.catch((error) => new ApiException("Erro ao atualizar a receita:", error));
};

const deleteById = async (id) => {
	return deleteDoc(doc(database, "recipes", id))
		.then((response) => {
			return response;
		})
		.catch((error) => new ApiException("Erro ao apagar a receita:", error));
};

export const RecipesService = {
	getAll,
	getById,
	getAllByUserId,
	getNameAndId,
	create,
	updateById,
	deleteById,
};
