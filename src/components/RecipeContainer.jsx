import { useNavigate } from "react-router-dom";
import Button from "./layout/Button";

function RecipeContainer({ id, name, img }) {
	const navigate = useNavigate();

	return (
		<div className="recipe-container">
			<div className="img">
				<img src={img} alt={name} />
			</div>
			<div className="description">
				<h3>{name}</h3>
				<Button handleClick={() => navigate(`/receitas/${id}`)}>Ver receita</Button>
			</div>
		</div>
	);
}

export default RecipeContainer;
