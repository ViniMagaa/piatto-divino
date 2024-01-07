import { useState } from "react";
import { GiCook } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

import { ApiException, AuthServices } from "../../../../services/api";
import { useAppContext } from "../../../../hooks";

import "./UserMenu.css";

export const UserMenu = () => {
	const { isConnected, setIsConnected, setFlagMessage, user, setUser } =
		useAppContext();
	const [isUserMenuActive, setIsUserMenuActive] = useState(false);
	const navigate = useNavigate();

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
				navigate("/");
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
