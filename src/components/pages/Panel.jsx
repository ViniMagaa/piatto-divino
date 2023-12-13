import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import RecipesContext from "../../context/RecipesContext";
import Button from "../layout/Button";
import ChefHub from "../ChefHub";

function Panel() {
	const { isConnected } = useContext(RecipesContext);
	const navigate = useNavigate();

	return (
		<>
			{!isConnected ? (
				<section>
					<h1>Contribua com receitas!</h1>
					<p>
						Você é um chef experiente e está disposto a <span className="bold-italic">contribuir com suas incríveis receitas</span> para enriquecer nosso banco de dados? Faça agora mesmo o seu
						cadastro e junte-se a nós nessa jornada culinária!
					</p>
					<div className="buttons-container">
						<Button handleClick={() => navigate("/chef/cadastrar")}>Cadastrar</Button>
						<Button handleClick={() => navigate("/chef/entrar")}>Entrar</Button>
					</div>
				</section>
			) : (
				<ChefHub />
			)}
		</>
	);
}

export default Panel;
