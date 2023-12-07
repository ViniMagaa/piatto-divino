import { useNavigate } from "react-router-dom";

function RecipeContainer({ name, img }) {
	const navigate = useNavigate();
	const handleClick = () => {
		const navLink = name.replaceAll(" ", "");
		navigate(`/cardapio/${navLink}`);
	};

	return (
		<div className="recipe-container">
			<div className="img">
				<img src={img} alt={name} />
			</div>
			<div className="description">
				<h3>{name}</h3>
				<button onClick={handleClick}>Ver mais</button>
			</div>
		</div>
	);
}

export default RecipeContainer;
