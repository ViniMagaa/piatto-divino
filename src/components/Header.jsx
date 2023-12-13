import NavBar from "./NavBar";
import UserMenu from "./UserMenu";

import logo from "../assets/logo.png";

function Header() {
	return (
		<header>
			<NavBar />
			<img className="logo" src={logo} alt="Logo Piatto Divino" />
			<UserMenu />
		</header>
	);
}

export default Header;
