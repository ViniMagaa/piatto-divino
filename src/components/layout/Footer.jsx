import {FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram} from "react-icons/fa"

import logo from "../../assets/logo.png";

function Footer() {
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
						<a
							href="https://github.com/vinimagaa"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub />
						</a>
						<a href="https://linkedin.com/" target="_blank" rel="noreferrer">
							<FaLinkedinIn />
						</a>

						<a
							href="https://twitter.com/vini_magaa"
							target="_blank"
							rel="noreferrer"
						>
							<FaTwitter />
						</a>
					</div>
				</div>
			</section>
			<section className="bottom-footer">
				<div className="copy">
					<span className="bold-italic">&copy; 2023 Piatto Divino</span> - Todos
					os direitos reservados
				</div>
				<div className="social-links">
					<a href="https://twitter.com/" target="_blank" rel="noreferrer">
						<FaTwitter />
					</a>
					<a href="https://facebook.com/" target="_blank" rel="noreferrer">
						<FaFacebookF />
					</a>
					<a href="https://instagram.com/" target="_blank" rel="noreferrer">
						<FaInstagram />
					</a>
					<a href="https://linkedin.com/" target="_blank" rel="noreferrer">
						<FaLinkedinIn />
					</a>
					<a href="https://github.com/" target="_blank" rel="noreferrer">
						<FaGithub />
					</a>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
