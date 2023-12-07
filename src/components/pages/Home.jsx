import MainRecipes from "../MainRecipes";

function Home() {
	return (
		<section>
			<div>
				<h2>Bem-vindo ao Piatto Divino</h2>
				<p>
					O refúgio culinário que celebra a autenticidade da cozinha italiana.
				</p>
			</div>
			<MainRecipes />
		</section>
	);
}

export default Home;
