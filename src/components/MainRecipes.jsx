import { useState } from "react";
import RecipeContainer from "./RecipeContainer";

function MainRecipes() {
	const [recipes, setRecipes] = useState([
		{
			name: "Spaghetti Carbonara",
			img: "https://placekitten.com/200/200",
			ingredients: [
				"400g de espaguete",
				"150g de pancetta ou guanciale",
				"3 ovos",
				"1 xícara de queijo Pecorino Romano ralado",
				"Pimenta preta moída na hora",
			],
			description:
				"Um prato clássico romano, o Spaghetti Carbonara é feito com uma deliciosa mistura de espaguete cozido al dente, pancetta ou guanciale frito, ovos e queijo Pecorino Romano.",
		},
		{
			name: "Lasanha à Bolonhesa",
			img: "https://placekitten.com/200/200",
			ingredients: [
				"500g de carne moída",
				"1 cebola picada",
				"2 dentes de alho picados",
				"700ml de molho de tomate",
				"250g de massa para lasanha",
				"300g de queijo mussarela ralado",
				"200g de queijo parmesão ralado",
				"Manjericão fresco para decorar",
			],
			description:
				"A Lasanha à Bolonhesa é um prato italiano clássico que consiste em camadas de massa para lasanha intercaladas com um rico molho bolonhesa e queijo derretido.",
		},
		{
			name: "Pizza Margherita",
			img: "https://placekitten.com/200/200",
			ingredients: [
				"Massa para pizza",
				"Molho de tomate",
				"150g de queijo mozzarella",
				"Folhas de manjericão fresco",
				"Azeite de oliva extra virgem",
			],
			description:
				"A Pizza Margherita é uma pizza clássica italiana com uma base de massa fina, molho de tomate, queijo mozzarella derretido, folhas de manjericão fresco e um toque de azeite de oliva.",
		},
		{
			name: "Risoto de Funghi Porcini",
			img: "https://placekitten.com/200/200",
			ingredients: [
				"1 xícara de arroz para risoto",
				"50g de cogumelos Porcini secos",
				"1 cebola picada",
				"2 dentes de alho picados",
				"1/2 xícara de vinho branco seco",
				"Caldo de legumes",
				"Queijo parmesão ralado",
				"Manteiga",
				"Sal e pimenta a gosto",
			],
			description:
				"O Risoto de Funghi Porcini é um prato italiano cremoso e reconfortante, preparado com arroz para risoto, cogumelos Porcini, vinho branco, caldo de legumes e queijo parmesão.",
		},
		{
			name: "Tiramisù",
			img: "https://placekitten.com/200/200",
			ingredients: [
				"4 gemas de ovo",
				"150g de açúcar",
				"500g de queijo mascarpone",
				"200ml de café forte, frio",
				"30ml de licor de café (opcional)",
				"Biscoitos tipo ladyfinger",
				"Cacau em pó para polvilhar",
			],
			description:
				"O Tiramisù é uma sobremesa italiana clássica, composta por camadas de biscoitos embebidos em café, creme de queijo mascarpone e finalizado com uma generosa pitada de cacau em pó.",
		},
	]);

	return (
		<section className="our-recipes">
			<h2>Principais receitas</h2>
			<div className="container-recipes">
				{recipes.map((recipe, index) => {
					return <RecipeContainer key={index} name={recipe.name} img={recipe.img} />;
				})}
			</div>
		</section>
	);
}

export default MainRecipes;
