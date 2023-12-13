import { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";

function Header() {
	const [isMenuActive, setIsMenuActive] = useState(false);

	return (
		<header>
			<nav>
				<img className="logo" src={logo} alt="Logo Piatto Divino" />
				<ul className={isMenuActive ? "active" : ""}>
					<li>
						<NavLink to="/" activeclassname="active">
							Início
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
				<span
					className="hamburger"
					onClick={() => setIsMenuActive(!isMenuActive)}
				>
					{!isMenuActive ? <BiMenuAltRight /> : <BiX />}
				</span>
			</nav>
		</header>
	);
}

export default Header;
