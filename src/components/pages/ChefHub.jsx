import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import RecipesContext from "../../context/RecipesContext";
import Button from "../layout/Button";

function ChefHub() {
	const { user, isConnected } = useContext(RecipesContext);
	const navigate = useNavigate();

	return (
		<section>
			{!isConnected ? (
				<>
					<h1>Contribua com receitas!</h1>
					<p>
						Você é um chef experiente e está disposto a <span className="bold-italic">contribuir com suas incríveis receitas</span> para enriquecer nosso banco de dados? Faça agora mesmo o seu
						cadastro e junte-se a nós nessa jornada culinária!
					</p>
					<div className="buttons-container">
						<Button handleClick={() => navigate("/chef/cadastrar")}>Cadastrar</Button>
						<Button handleClick={() => navigate("/chef/entrar")}>Entrar</Button>
					</div>
				</>
			) : (
				<>
					<h1>Olá, chef {user.name}!</h1>
				</>
			)}
		</section>
	);
}

export default ChefHub;
