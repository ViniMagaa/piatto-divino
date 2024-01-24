import { Categories } from "../../../../../shared/components";
import { convertTimestampToLocaleString } from "../../../../../shared/utils";

import "./RecipeInformation.css";

export const RecipeInformation = ({
	recipe: { categories, author, createdAt, lastUpdate },
}) => {
	const formattedCreatedAt = convertTimestampToLocaleString(createdAt, "pt-br");
	const formattedLastUpdate = convertTimestampToLocaleString(
		lastUpdate,
		"pt-br"
	);

	return (
		<div className="recipe-information">
			<div>
				Publicado por: <span className="bold-italic">{author.displayName}</span>
			</div>
			<div>
				Data de criação:{" "}
				<span className="bold-italic">{formattedCreatedAt}</span>
			</div>
			<div>
				Última edição:{" "}
				<span className="bold-italic">{formattedLastUpdate}</span>
			</div>
			<div className="categories-container">
				Categorias:
				<Categories categoriesList={categories} />
			</div>
		</div>
	);
};
