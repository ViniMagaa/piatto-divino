import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header>
			<nav>
				<h1>Piatto Divino</h1>
				<ul>
					<li>
						<NavLink to="/" activeclassname="active">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/cardapio" activeclassname="active">
							Cardápio
						</NavLink>
					</li>
					<li>
						<NavLink to="/sobre" activeclassname="active">
							Sobre
						</NavLink>
					</li>
					<li>
						<NavLink to="/cadastro" activeclassname="active">
							Sou um Chef
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
