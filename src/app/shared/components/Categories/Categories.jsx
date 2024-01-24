import "./Categories.css";

export const categories = [
	{ id: "sweet", label: "Doce" },
	{ id: "salty", label: "Salgado" },
	{ id: "big-meal", label: "Grande refeição" },
	{ id: "small-meal", label: "Pequena refeição" },
	{ id: "vegetarian", label: "Vegetariano" },
	{ id: "vegan", label: "Vegano" },
	{ id: "gluten-free", label: "Sem glúten" },
	{ id: "low-calorie", label: "Baixa caloria" },
	{ id: "quick", label: "Rápido" },
	{ id: "healthy", label: "Saudável" },
	{ id: "dessert", label: "Sobremesa" },
	{ id: "gourmet", label: "Gourmet" },
	{ id: "italian", label: "Prato italiano" },
	{ id: "other", label: "Outro" },
];

export const Categories = ({ categoriesList = categories }) => {
	return categoriesList.map((category) => {
		return (
			<span
				key={category.id}
				className={`category ${category.id}`}
				style={{ background: `rgba(var(--${category.id}), 0.25)` }}
			>
				{category.label}
			</span>
		);
	});
};
