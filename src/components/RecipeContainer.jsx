import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import RecipesContext from "../context/RecipesContext";
import Button from "./layout/Button";

function RecipeContainer({ recipe: { id, name, author, img } }) {
	const { user } = useContext(RecipesContext);
	const navigate = useNavigate();

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
								Ver
							</Button>
							<Button handleClick={() => navigate(`/chef/editar/${id}`)}>
								Editar
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
