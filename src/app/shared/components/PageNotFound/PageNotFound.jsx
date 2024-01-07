import { useNavigate } from "react-router-dom";

import notFoundImage from "../../assets/img/not-found.svg";
import { Button } from "../Button/Button";

import "./PageNotFound.css";

export const PageNotFound = () => {
	const navigate = useNavigate();

	return (
		<section className="page-not-found-container">
			<img src={notFoundImage} alt="Página não encontrada" />
			<div className="buttons-container">
				<Button handleClick={() => navigate("/")}>Voltar ao início</Button>
			</div>
		</section>
	);
};
