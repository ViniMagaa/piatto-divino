import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	query,
	setDoc,
	where
} from "firebase/firestore";
import { database } from "../../FirebaseConfig";
import { ApiException } from "../ApiException";

const getAll = () => {
	return getDocs(collection(database, "recipes"))
		.then((snapshot) =>
			snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}))
		)
		.catch((error) => new ApiException("Erro ao buscar as receitas:", error));
};

const getById = (recipeId) => {
	return getDoc(doc(database, "recipes", recipeId))
		.then((docSnapshot) => docSnapshot.data())
		.catch((error) => new ApiException("Erro ao buscar a receita:", error));
};

const getAllByUserId = (userId) => {
	return getDocs(
		query(collection(database, "recipes"), where("author.uid", "==", userId))
	)
		.then((snapshot) =>
			snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}))
		)
		.catch(
			(error) =>
				new ApiException("Erro ao buscar as receitas do usuário:", error)
		);
	// try {
	// 	const { data } = await Api().get("/recipes");
	// 	return data.filter(
	// 		(recipe) => recipe.author && recipe.author.id === userId
	// 	);
	// } catch (error) {
	// 	return new ApiException("Erro ao buscar a receita");
	// }
};

const create = (recipeToCreate) => {
	return addDoc(collection(database, "recipes"), recipeToCreate)
		.then((response) => {
			return response;
		})
		.catch((error) => new ApiException("Erro ao criar a receita:", error));
	// try {
	// 	const { data } = await Api().post("recipes", recipeToCreate);
	// 	return data;
	// } catch (error) {
	// 	return new ApiException("Erro ao criar a receita");
	// }
};

const updateById = (id, recipeToUpdate) => {
	return setDoc(doc(database, "recipes", id), recipeToUpdate)
		.then((response) => {
			return response;
		})
		.catch((error) => new ApiException("Erro ao atualizar a receita:", error));
	// try {
	// 	const { data } = await Api().put(`/recipes/${id}`, recipeToUpdate);
	// 	return data;
	// } catch (error) {
	// 	return new ApiException("Erro ao atualizar a receita");
	// }
};

const deleteById = (id) => {
	return deleteDoc(doc(database, "recipes", id))
		.then((response) => {
			return response;
		})
		.catch((error) => new ApiException("Erro ao apagar a receita:", error));
	// try {
	// 	await Api().delete(`/recipes/${id}`);
	// 	return undefined;
	// } catch (error) {
	// 	return new ApiException("Erro ao excluir a receita");
	// }
};

export const RecipesService = {
	getAll,
	getById,
	getAllByUserId,
	create,
	updateById,
	deleteById,
};
