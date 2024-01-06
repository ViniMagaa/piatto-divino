import loading from "../../assets/img/pan.gif";

import "./LoadingPan.css";

export const LoadingPan = () => {
	return (
		<div className="loading-container">
			<img src={loading} alt="Carregando..." />
		</div>
	);
};
