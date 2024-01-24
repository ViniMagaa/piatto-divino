import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Button } from "../../";
import { useAppContext } from "../../../hooks";
import { ApiException, RecipesService } from "../../../services/api";

import "./RecipeContainerActionButtons.css";

export const RecipeContainerActionButtons = ({
	recipe: { author, name, id },
}) => {
	const { user, ADMIN_UID, flagMessage, setFlagMessage } = useAppContext();

	const navigate = useNavigate();

	const isAuthor = author.uid === user.uid;
	const isAdmin = user.uid === ADMIN_UID;
	const canEdit = isAuthor || isAdmin;

	const handleRemoveRecipe = async () => {
		if (flagMessage.isVisible) return;

		if (
			!window.confirm(
				`Você tem certeza que deseja excluir a receita: "${name}"?`
			)
		)
			return;

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

	return (
		<div className="recipe-action-buttons-container buttons-container">
			<Button handleClick={() => navigate(`/receitas/${id}`)}>
				{canEdit ? <FaEye /> : "Ver receita"}
			</Button>
			{canEdit && (
				<>
					<Button handleClick={() => navigate(`/chef/editar/${id}`)}>
						<FaPencilAlt />
					</Button>
					<Button handleClick={handleRemoveRecipe}>
						<FaTrashAlt />
					</Button>
				</>
			)}
		</div>
	);
};
