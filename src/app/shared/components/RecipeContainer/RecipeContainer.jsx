import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Button } from "..";
import { useAppContext } from "../../hooks";
import { ApiException } from "../../services/api/ApiException";
import { RecipesService } from "../../services/api/recipes/Recipes.service";
import { convertTimestampToLocaleString } from "../../utils";

import "./RecipeContainer.css";

export const RecipeContainer = ({
	recipe: { id, name, author, img, lastUpdate },
}) => {
	const { user, flagMessage, setFlagMessage, ADMIN_UID } = useAppContext();
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
				message: "Receita excluída!",
				subMessage: "Que pena... mas sabemos que você publicará melhores. 😋",
			});
			navigate("/");
		}
	};

	const newLastUpdate = convertTimestampToLocaleString(lastUpdate, "pt-br");

	const isAuthor = author.uid === user.uid;
	const isAdmin = user.uid === ADMIN_UID;
	const canEdit = isAuthor || isAdmin;

	return (
		<div className="recipe-container">
			<div className="image-container">
				<img src={img} alt={name} />
			</div>
			<div className="description">
				<div className="information">
					<h3>{name}</h3>
					<span className="small">
						Por: <span className="bold-italic">{author.displayName}</span>
					</span>
					<span className="small">
						Última edição: <span className="bold-italic">{newLastUpdate}</span>
					</span>
				</div>
				<div className="buttons-container">
					<Button handleClick={() => navigate(`/receitas/${id}`)}>
						{canEdit ? <FaEye /> : "Ver receita"}
					</Button>
					{canEdit && (
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
