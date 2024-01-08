import { LoadingPan, RecipeContainer } from "../../../shared/components";

export const RecipesList = ({ title, recipes }) => {
	return (
		<>
			<h2>{title}</h2>
			{recipes === null ? (
				<LoadingPan />
			) : recipes.length > 0 ? (
				<div className="recipes-container">
					{recipes.map((recipe) => (
						<RecipeContainer key={recipe.id} recipe={recipe} />
					))}
				</div>
			) : (
				<p>Você não possui receitas. Comece publicando uma!</p>
			)}
		</>
	);
};
