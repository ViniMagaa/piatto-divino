import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import { database } from "../../FirebaseConfig";
import { ApiException } from "../ApiException";

const getAllByRecipeId = async (recipeId) => {
	return getDocs(
		query(collection(database, "comments"), where("recipeId", "==", recipeId))
	)
		.then((snapshot) =>
			snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}))
		)
		.catch((error) => new ApiException("Erro ao buscar comentários:", error));
};

const create = async (commentToCreate) => {
	return addDoc(collection(database, "comments"), commentToCreate)
		.then((response) => {
			return response;
		})
		.catch((error) => new ApiException("Erro ao criar a comentário:", error));
};

const updateById = async (id, fieldsToUpdate) => {
	return updateDoc(doc(database, "comments", id), fieldsToUpdate)
		.then((response) => {
			return response;
		})
		.catch((error) => new ApiException("Erro ao atualizar a receita:", error));
};

const deleteById = async (id) => {
	return deleteDoc(doc(database, "comments", id))
		.then((response) => {
			return response;
		})
		.catch((error) => new ApiException("Erro ao excluir comentário:", error));
};

export const CommentsService = {
	getAllByRecipeId,
	create,
	updateById,
	deleteById,
};
