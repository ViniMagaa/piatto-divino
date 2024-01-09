import { MainRecipes, SearchBar } from "../../shared/components";

export const Home = () => {
	return (
		<section>
			<div>
				<h1>Bem-vindo</h1>
				<p>
					O refúgio culinário que reúne a autenticidade da cozinha italiana em
					um só lugar.
				</p>
			</div>
			<SearchBar />
			<MainRecipes />
		</section>
	);
};
