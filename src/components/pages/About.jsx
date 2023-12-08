function About() {
	return (
		<section className="about">
			<h1>Sobre nós</h1>
			<p>
				Bem-vindo ao{" "}
				<strong>
					<i>Piatto Divino</i>
				</strong>
				, o refúgio culinário que celebra a autenticidade da cozinha italiana.
				Em nosso restaurante, mergulhe em uma experiência gastronômica que
				transcende o comum, onde cada prato é uma jornada de sabores
				cuidadosamente selecionados para transportar você diretamente para as
				ensolaradas paisagens da Itália.
			</p>
			<p>
				No{" "}
				<strong>
					<i>Piatto Divino</i>
				</strong>
				, nossa paixão pela culinária italiana se reflete em cada detalhe, desde
				os ingredientes frescos e de alta qualidade até a preparação artesanal
				de nossos pratos.
			</p>
			<p>
				Explore um cardápio diversificado que captura a essência da tradição
				italiana, oferecendo desde as clássicas massas perfeitamente al dente
				até deliciosas pizzas, além de outros tesouros culinários.
			</p>
			<p>
				Nossa atmosfera acolhedora e elegante é um convite para momentos
				especiais, seja desfrutando de um jantar romântico a dois, celebrando
				ocasiões memoráveis com amigos e familiares, ou simplesmente apreciando
				uma refeição excepcional em boa companhia.
			</p>
			<p>
				No{" "}
				<strong>
					<i>Piatto Divino</i>
				</strong>{" "}
				cada refeição é uma celebração do prazer de comer bem. Explore as
				páginas do nosso menu para descobrir os sabores autênticos da Itália, e
				sinta-se em casa em nosso espaço dedicado a proporcionar momentos
				deliciosos e memoráveis.
			</p>
			<h3>
				Bem-vindo ao{" "}
				<strong>
					<i>Piatto Divino</i>
				</strong>
				ada prato conta uma história de sabor e tradição.{" "}
				<span className="special-text">Buon appetito!</span>
			</h3>
			<button onClick={() => (window.location.href = "/receitas")}>Ver receitas</button>
		</section>
	);
}

export default About;
