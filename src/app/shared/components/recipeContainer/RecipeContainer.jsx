import { useContext } from "react";
import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import RecipesContext from "../../contexts/RecipesContext";
import { Button } from "..";

import "./RecipeContainer.css";
import { RecipesService } from "../../services/api/recipes/Recipes.service";
import { ApiException } from "../../services/api/ApiException";

export const RecipeContainer = ({ recipe: { id, name, author, img } }) => {
	const { user, isConnected, flagMessage, setFlagMessage } =
		useContext(RecipesContext);
	const navigate = useNavigate();

	const handleRemoveRecipe = async () => {
		if (flagMessage.isVisible) return;

		const response = await RecipesService.deleteById(id);
		if (response instanceof ApiException) {
			setFlagMessage({
				isVisible: true,
				message: "Erro ao excluir a receita!",
				subMessage: "Ocorreu algo inesperado ao tentar apagá-la.",
			});
		} else {
			setFlagMessage({
				isVisible: true,
				message: "Receita excluída com sucesso!",
				subMessage: "Que pena... mas sabemos que você publicará melhores. 😋",
			});
		}
	};

	return (
		<div className="recipe-container">
			<div className="image-container">
				<img src={img} alt={name} />
			</div>
			<div className="description">
				<div>
					<h3>{name}</h3>
					<small>
						Por: <span className="bold-italic">{author.displayName}</span>
					</small>
				</div>
				<div className="buttons-container">
					<Button handleClick={() => navigate(`/receitas/${id}`)}>
						{isConnected && user && user.uid === author.uid ? (
							<FaEye />
						) : (
							"Ver receita"
						)}
					</Button>
					{isConnected && user && user.uid === author.uid && (
						<>
							<Button handleClick={() => navigate(`/chef/editar/${id}`)}>
								<FaPencilAlt />
							</Button>
							<Button handleClick={handleRemoveRecipe} scroll={false}>
								<FaTrashAlt />
							</Button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default RecipeContainer;
