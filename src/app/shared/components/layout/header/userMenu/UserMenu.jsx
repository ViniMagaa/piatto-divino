import { useContext, useState } from "react";
import { GiCook } from "react-icons/gi";
import { Link } from "react-router-dom";

import RecipesContext from "../../../../contexts/RecipesContext";
import { AuthServices } from "../../../../services/api";

import "./UserMenu.css";

export const UserMenu = () => {
	const { isConnected, user } = useContext(RecipesContext);
	const [isUserMenuActive, setIsUserMenuActive] = useState(false);

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
						<Link to="/" onClick={AuthServices.logout}>
							Desconectar
						</Link>
					</li>
				</ul>
			</div>
		)
	);
};
