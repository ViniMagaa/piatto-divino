import List from "./layout/List";

function ViewRecipe({ recipe }) {
	return (
		<div className="view-recipe">
			{recipe && (
				<>
					<div className="img">
						<img src={recipe.img} alt={recipe.name} />
					</div>
					<div className="view-recipe-description">
						<div>
							<h1>{recipe.name}</h1>
							<p>{recipe.description}</p>
						</div>
						<List title="Ingredientes" list={recipe.ingredients} type="disc" />
						<List
							title="Modo de preparo"
							list={recipe.instructions}
							type="number"
						/>
					</div>
				</>
			)}
		</div>
	);
}

export default ViewRecipe;
