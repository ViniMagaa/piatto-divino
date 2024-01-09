import { useNavigate } from "react-router-dom";

import { Button } from "../../shared/components";

import "./About.css";

export const About = () => {
	const navigate = useNavigate();

	return (
		<section className="about">
			<h1>Sobre nós</h1>
			<article>
				<p>
					<span className="bold-italic">Bem-vindo ao Piatto Divino</span>, sua
					janela virtual para o mundo encantador da culinária italiana. Em nosso
					site, você é convidado a mergulhar em uma experiência gastronômica que
					vai além do comum, descobrindo receitas que oferecem uma viagem de
					sabores diretamente para as ensolaradas paisagens da Itália.
				</p>
				<p>
					No <span className="bold-italic">Piatto Divino</span>, celebramos a
					paixão pela culinária italiana, refletida em cada receita compartilhada.
					Desde os ingredientes frescos e de alta qualidade até a arte da
					preparação, nosso site é um tesouro de conhecimento e inspiração
					culinária.
				</p>
				<p>
					Explore um cardápio diversificado, repleto de clássicos como massas
					perfeitamente al dente, pizzas deliciosas e muito mais, todos
					disponíveis ao alcance de um clique. Seja você um chef experiente ou um
					entusiasta iniciante na cozinha, nossas receitas são projetadas para
					inspirar e guiar você em cada etapa do processo de culinária.
				</p>
				<p>
					O <span className="bold-italic">Piatto Divino</span> é mais do que um
					site de receitas - é uma comunidade onde os amantes da cozinha italiana
					podem compartilhar suas criações, experiências e paixão pela comida. Se
					você tem uma receita especial para compartilhar ou está procurando por
					novas ideias para o jantar, encontrará um lar acolhedor aqui.
				</p>
				<p>
					Navegue pelas páginas do nosso menu, descubra os autênticos sabores da
					Itália e junte-se a nós na celebração do prazer de cozinhar e comer bem.
				</p>
				<h3>
					Seja bem-vindo ao <span className="bold-italic">Piatto Divino</span>,
					onde cada receita é uma história de sabor e tradição à espera de ser
					descoberta.
				</h3>
			</article>
			<h1>Buon appetito!</h1>
			<div className="buttons-container">
				<Button handleClick={() => navigate("/receitas")}>Ver receitas</Button>
				<Button handleClick={() => navigate("/chef")}>Quero contribuir</Button>
			</div>
		</section>
	);
};
