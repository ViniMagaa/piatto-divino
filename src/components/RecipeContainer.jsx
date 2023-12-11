import { useNavigate } from "react-router-dom";
import Button from "./layout/Button";

function RecipeContainer({ id, name, author, img }) {
	const navigate = useNavigate();

	return (
		<div className="recipe-container">
			<div className="img">
				<img src={img} alt={name} />
			</div>
			<div className="description">
				<div>
					<h3>{name}</h3>
					<small>Por: <span className="bold-italic">{author.name}</span></small>
				</div>
				<Button handleClick={() => navigate(`/receitas/${id}`)}>Ver receita</Button>
			</div>
		</div>
	);
}

export default RecipeContainer;
