import { useNavigate } from "react-router-dom";
import Button from "./layout/Button";

function RecipeContainer({ id, name, img }) {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/receitas/${id}`);
		window.location.reload();
	};

	return (
		<div className="recipe-container">
			<div className="img">
				<img src={img} alt={name} />
			</div>
			<div className="description">
				<h3>{name}</h3>
				<Button handleClick={handleClick}>Ver receita</Button>
			</div>
		</div>
	);
}

export default RecipeContainer;
