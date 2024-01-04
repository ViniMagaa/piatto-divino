import { useContext, useState } from "react";
import { GiCook } from "react-icons/gi";
import { Link } from "react-router-dom";

import RecipesContext from "../../../../contexts/RecipesContext";
import { ApiException, AuthServices } from "../../../../services/api";

import "./UserMenu.css";

export const UserMenu = () => {
	const { isConnected, setIsConnected, setFlagMessage, user, setUser } =
		useContext(RecipesContext);
	const [isUserMenuActive, setIsUserMenuActive] = useState(false);

	const handleLogout = () => {
		AuthServices.logout().then((response) => {
			if (response instanceof ApiException) {
				setFlagMessage({
					isVisible: true,
					message: "Erro ao desconectar!",
					subMessage: "Ocorreu um erro, tente novamente.",
				});
			} else {
				setFlagMessage({
					isVisible: true,
					message: "Até mais!",
					subMessage: "Mas volte logo. 👋",
				});
				setUser({});
				setIsConnected(false);
			}
		});
	};

	return (
		isConnected &&
		user && (
			<div className="user-menu">
				<GiCook onClick={() => setIsUserMenuActive(!isUserMenuActive)} />
				<ul className={isUserMenuActive ? "active" : ""}>
					<li>
						<span className="bold-italic">{user.displayName}</span>
					</li>
					<li>
						<Link to="/chef">Meu painel</Link>
					</li>
					<li>
						<Link to="/" onClick={handleLogout}>
							Desconectar
						</Link>
					</li>
				</ul>
			</div>
		)
	);
};
