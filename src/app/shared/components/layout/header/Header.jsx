import { NavBar } from "./navBar/NavBar";
import { UserMenu } from "./userMenu/UserMenu";

import logo from "../../../assets/img/logo.png";

import "./Header.css";

export const Header = () => {
	return (
		<header>
			<NavBar />
			<img className="logo" src={logo} alt="Logo Piatto Divino" />
			<UserMenu />
		</header>
	);
};
