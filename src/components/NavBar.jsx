import { useState } from "react";
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function NavBar() {
	const [isMenuActive, setIsMenuActive] = useState(false);
  
	return (
		<nav>
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
			<div
				className="hamburger"
				onClick={() => setIsMenuActive(!isMenuActive)}
			>
				{!isMenuActive ? <BiMenuAltLeft /> : <BiX />}
			</div>
		</nav>
	);
}

export default NavBar;
