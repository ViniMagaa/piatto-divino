import {
	FaGithub,
	FaLinkedinIn,
	FaTwitter,
	FaFacebookF,
	FaInstagram,
} from "react-icons/fa";

import logo from "../../../assets/img/logo.png";
import { SocialLink } from "./SocialLink";

import "./Footer.css";

export const Footer = () => {
	return (
		<footer>
			<section>
				<div className="logo">
					<img src={logo} alt="Piatto Divino" />
				</div>

				<div className="about-creator">
					<div>
						<h2>Sobre o criador:</h2>
						<p>
							<span className="bold-italic">Vinícius Magalhães</span>, um
							estudante do ensino médio apaixonado por desafios e programação.
							Teve a ideia de criar esta página para aprimorar seus
							conhecimentos em programação afim de contribuir de forma positiva
							para a vida das pessoas.
						</p>
					</div>
					<div className="social-links">
						<SocialLink
							linkTo="https://github.com/vinimagaa"
							placeHolder={<FaGithub />}
						/>
						<SocialLink
							linkTo="https://linkedin.com/"
							placeHolder={<FaLinkedinIn />}
						/>
						<SocialLink
							linkTo="https://twitter.com/vini_magaa"
							placeHolder={<FaTwitter />}
						/>
					</div>
				</div>
			</section>
			<section className="bottom-footer">
				<div className="copy">
					<span className="bold-italic">&copy; Piatto Divino</span> - Todos
					os direitos reservados
				</div>
				<div className="social-links">
					<SocialLink
						linkTo="https://twitter.com/"
						placeHolder={<FaTwitter />}
					/>
					<SocialLink
						linkTo="https://facebook.com/"
						placeHolder={<FaFacebookF />}
					/>
					<SocialLink
						linkTo="https://instagram.com/"
						placeHolder={<FaInstagram />}
					/>
					<SocialLink
						linkTo="https://linkedin.com/"
						placeHolder={<FaLinkedinIn />}
					/>
					<SocialLink linkTo="https://github.com/" placeHolder={<FaGithub />} />
				</div>
			</section>
		</footer>
	);
};
