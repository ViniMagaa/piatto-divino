import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GiCook } from "react-icons/gi";

import RecipesContext from "../../../contexts/RecipesContext";

export const UserMenu = () => {
	const { isConnected, user, disconnectUser } = useContext(RecipesContext);
	const [isUserMenuActive, setIsUserMenuActive] = useState(false);

	return (
		<>
			{isConnected && user && (
				<div className="user-menu">
					<GiCook onClick={() => setIsUserMenuActive(!isUserMenuActive)} />
					<ul className={isUserMenuActive ? "active" : ""}>
						<li>
							<span className="bold-italic">{user.name}</span>
						</li>
						<li>
							<Link to="/chef">Meu painel</Link>
						</li>
						<li>
							<Link to="/" onClick={disconnectUser}>
								Desconectar
							</Link>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
