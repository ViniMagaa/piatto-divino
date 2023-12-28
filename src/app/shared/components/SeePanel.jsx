import { useNavigate } from "react-router-dom";

import { Button } from ".";

export const SeePanel = () => {
	const navigate = useNavigate();
	return (
		<section>
			<h1>Você já está conectado</h1>
			<Button handleClick={() => navigate("/chef")}>Ver painel</Button>
		</section>
	);
};
