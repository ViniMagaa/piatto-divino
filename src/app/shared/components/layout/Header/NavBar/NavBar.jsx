import { useState } from "react";
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import { useClickOutside } from "../../../../hooks";
import "./NavBar.css";

export const NavBar = () => {
	const [isMenuActive, setIsMenuActive] = useState(false);

	const paths = [
		{ path: "/", name: "Início" },
		{ path: "/receitas", name: "Receitas" },
		{ path: "/sobre", name: "Sobre" },
		{ path: "/chef", name: "Sou um chef" },
	];

	const closeMenu = () => {
		setIsMenuActive(false);
	};

	const menuRef = useClickOutside(closeMenu);

	return (
		<nav>
			<ul ref={menuRef} className={isMenuActive ? "active" : ""}>
				{paths.map((path, index) => (
					<li key={index} onClick={closeMenu}>
						<NavLink to={path.path} activeclassname="active">
							{path.name}
						</NavLink>
					</li>
				))}
			</ul>
			<div className="hamburger" onClick={() => setIsMenuActive(!isMenuActive)}>
				{!isMenuActive ? <BiMenuAltLeft /> : <BiX />}
			</div>
		</nav>
	);
};
