import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import RecipesContext from "../context/RecipesContext";
import Button from "./layout/Button";

function RecipeContainer({ recipe: { id, name, author, img } }) {
	const { user, flagMessage, setFlagMessage, deleteRecipe } =
		useContext(RecipesContext);
	const navigate = useNavigate();

	const handleRemoveRecipe = () => {
		if (flagMessage.isVisible) return;

		deleteRecipe(id);

		setFlagMessage({
			isVisible: true,
			message: "Receita excluída com sucesso!",
			subMessage: "Que pena... mas sabemos que você publicará melhores. 😋",
		});
	};

	return (
		<div className="recipe-container">
			<div className="img">
				<img src={img} alt={name} />
			</div>
			<div className="description">
				<div>
					<h3>{name}</h3>
					<small>
						Por: <span className="bold-italic">{author.name}</span>
					</small>
				</div>
				<div className="buttons-container">
					{user.id === author.id ? (
						<>
							<Button handleClick={() => navigate(`/receitas/${id}`)}>
								<FaEye />
							</Button>
							<Button handleClick={() => navigate(`/chef/editar/${id}`)}>
								<FaPencilAlt />
							</Button>
							<Button handleClick={handleRemoveRecipe} scroll={false}>
								<FaTrashAlt />
							</Button>
						</>
					) : (
						<Button handleClick={() => navigate(`/receitas/${id}`)}>
							Ver receita
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}

export default RecipeContainer;
