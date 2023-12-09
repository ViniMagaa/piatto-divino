import { useNavigate } from "react-router-dom";
import Button from "./layout/Button";

function SeePanel() {
	const navigate = useNavigate();
	return (
		<>
			<h1>Você já está conectado</h1>
			<Button handleClick={() => navigate("/chef")}>Ver painel</Button>
		</>
	);
}

export default SeePanel;
