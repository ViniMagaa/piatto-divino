import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

const getAll = async () => {
	try {
		const { data } = await Api().get("/recipes");
		return data;
	} catch (error) {
		return new ApiException("Erro ao buscar as receitas");
	}
};

const getById = async (id) => {
	try {
		const { data } = await Api().get(`/recipes/${id}`);
		return data;
	} catch (error) {
		return new ApiException("Erro ao buscar a receita");
	}
};

const getAllByUserId = async (userId) => {
	try {
		const { data } = await Api().get("/recipes");
		return data.filter(
			(recipe) => recipe.author && recipe.author.id === userId
		);
	} catch (error) {
		return new ApiException("Erro ao buscar a receita");
	}
};

const create = async (recipeToCreate) => {
	try {
		const { data } = await Api().post("recipes", recipeToCreate);
		return data;
	} catch (error) {
		return new ApiException("Erro ao criar a receita");
	}
};

const updateById = async (id, recipeToUpdate) => {
	try {
		const { data } = await Api().put(`/recipes/${id}`, recipeToUpdate);
		return data;
	} catch (error) {
		return new ApiException("Erro ao atualizar a receita");
	}
};

const deleteById = async (id) => {
	try {
		await Api().delete(`/recipes/${id}`);
		return undefined;
	} catch (error) {
		return new ApiException("Erro ao excluir a receita");
	}
};

export const RecipesService = {
	getAll,
	getById,
	getAllByUserId,
	create,
	updateById,
	deleteById,
};
