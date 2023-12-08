import { useNavigate } from "react-router-dom";
import Button from "../layout/Button";

function ChefHub() {
	const navigate = useNavigate();

	return (
		<section>
			<h1>Contribua com receitas!</h1>
			<p>
				Você é um chef experiente e está disposto a{" "}
				<strong>
					contribuir com suas incríveis receitas para enriquecer nosso banco de
					dados?
				</strong>{" "}
				Faça agora mesmo o seu cadastro e junte-se a nós nessa jornada
				culinária!
			</p>
			<div className="buttons-container">
				<Button handleClick={() => navigate("/chef/cadastrar")}>Cadastrar</Button>
				<Button handleClick={() => navigate("/chef/entrar")}>Entrar</Button>
			</div>
		</section>
	);
}

export default ChefHub;
