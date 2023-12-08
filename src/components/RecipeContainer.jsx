import { useNavigate } from "react-router-dom";

function RecipeContainer({ id, name, img }) {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/receitas/${id}`);
	};

	return (
		<div className="recipe-container">
			<div className="img">
				<img src={img} alt={name} />
			</div>
			<div className="description">
				<h3>{name}</h3>
				<button onClick={handleClick}>Ver receita</button>
			</div>
		</div>
	);
}

export default RecipeContainer;
