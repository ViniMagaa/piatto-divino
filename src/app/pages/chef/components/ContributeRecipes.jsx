import { useNavigate } from "react-router-dom";

import { Button } from "../../../shared/components";

export const ContributeRecipes = () => {
	const navigate = useNavigate();

	return (
		<section>
			<h1>Contribua com receitas!</h1>
			<p>
				Você é um chef experiente e está disposto a{" "}
				<span className="bold-italic">
					contribuir com suas incríveis receitas
				</span>{" "}
				para enriquecer nosso banco de dados? Faça agora mesmo o seu cadastro e
				junte-se a nós nessa jornada culinária!
			</p>
			<div className="buttons-container">
				<Button handleClick={() => navigate("/cadastrar")}>
					Cadastrar
				</Button>
				<Button handleClick={() => navigate("/entrar")}>Entrar</Button>
			</div>
		</section>
	);
};
