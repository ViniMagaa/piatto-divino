import { List } from "../../../../shared/components";
import { convertTimestampToLocaleString } from "../../../../shared/utils";

import "./ViewRecipeContainer.css";

export const ViewRecipeContainer = ({ recipe }) => {
	const {
		name,
		img,
		description,
		ingredients,
		instructions,
		author,
		lastUpdate,
		createdAt,
	} = recipe;

	const newCreatedAt = convertTimestampToLocaleString(createdAt, "pt-br");
	const newLastUpdate = convertTimestampToLocaleString(lastUpdate, "pt-br");

	return (
		<div className="view-recipe">
			<div className="image-container">
				<img src={img} alt={name} />
			</div>
			<div className="view-recipe-description">
				<div>
					<h1>{name}</h1>
					<p>{description}</p>
				</div>
				<List title="Ingredientes" list={ingredients} type="disc" />
				<List title="Modo de preparo" list={instructions} type="number" />
				<div className="information">
					<h3>Informações da receita</h3>
					<span className="small">
						Por: <span className="bold-italic">{author.displayName}</span>
					</span>
					<span className="small">
						Data de criação: <span className="bold-italic">{newCreatedAt}</span>
					</span>
					<span className="small">
						Última edição: <span className="bold-italic">{newLastUpdate}</span>
					</span>
				</div>
			</div>
		</div>
	);
};
