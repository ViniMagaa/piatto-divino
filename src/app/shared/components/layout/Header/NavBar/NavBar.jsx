import { useState, useEffect, useRef } from "react";
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export const NavBar = () => {
	const [isMenuActive, setIsMenuActive] = useState(false);
	const menuRef = useRef();

	const paths = [
		{ path: "/", name: "Início" },
		{ path: "/receitas", name: "Receitas" },
		{ path: "/sobre", name: "Sobre" },
		{ path: "/chef", name: "Sou um chef" },
	];

	const closeMenu = () => {
		setIsMenuActive(false);
	};

	useEffect(() => {
		const handleDocumentClick = (e) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(e.target) &&
				isMenuActive
			) {
				closeMenu();
			}
		};

		document.addEventListener("mousedown", handleDocumentClick);

		return () => {
			document.removeEventListener("mousedown", handleDocumentClick);
		};
	}, [isMenuActive]);

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
