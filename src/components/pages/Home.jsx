import MainRecipes from "../MainRecipes";

function Home() {
	return (
		<section>
			<div>
				<h2>
					Bem-vindo ao <span className="brand-name">Piatto Divino</span>
				</h2>
				<p>
					O refúgio culinário que reúne a autenticidade da cozinha italiana em
					um só lugar.
				</p>
			</div>
			<MainRecipes />
		</section>
	);
}

export default Home;
