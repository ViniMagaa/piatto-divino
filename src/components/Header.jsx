import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";

function Header() {
	return (
		<header>
			<nav>
				<img className="logo" src={logo} alt="Logo Piatto Divino" />
				<ul>
					<li>
						<NavLink to="/" activeclassname="active">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/receitas" activeclassname="active">
							Receitas
						</NavLink>
					</li>
					<li>
						<NavLink to="/sobre" activeclassname="active">
							Sobre
						</NavLink>
					</li>
					<li>
						<NavLink to="/chef" activeclassname="active">
							Sou um Chef
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
