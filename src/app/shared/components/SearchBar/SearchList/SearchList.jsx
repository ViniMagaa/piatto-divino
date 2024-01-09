import { useEffect, useState } from "react";

import "./SearchList.css";

export const SearchList = ({ list, value }) => {
	const [filteredList, setFilteredList] = useState([]);

	useEffect(() => {
		setFilteredList(
			list.filter((recipe) =>
				recipe.name.toLowerCase().includes(value.toLowerCase())
			)
		);
	}, [list, value]);

	return (
		<ul className="search-items-container">
			{filteredList.length > 0 ? (
				filteredList.map((recipe) => (
					<li key={recipe.id}>
						<a href={`/receitas/${recipe.id}`}>{recipe.name}</a>
					</li>
				))
			) : (
				<li>
					<span className="bold-italic">Receita não encontrada</span>
				</li>
			)}
		</ul>
	);
};
