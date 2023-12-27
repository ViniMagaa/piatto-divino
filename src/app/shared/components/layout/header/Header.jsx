import { NavBar } from "./NavBar";
import { UserMenu } from "./UserMenu";

import logo from "../../../assets/img/logo.png";

export const Header = () => {
	return (
		<header>
			<NavBar />
			<img className="logo" src={logo} alt="Logo Piatto Divino" />
			<UserMenu />
		</header>
	);
};
