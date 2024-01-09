import { useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import { Button } from "../";
import { useAppContext, useClickOutside } from "../../hooks";
import { ApiException, RecipesService } from "../../services/api";
import { SearchList } from "./SearchList/SearchList";

import "./SearchBar.css";

export const SearchBar = () => {
	const { setFlagMessage } = useAppContext();

	const [recipesList, setRecipesList] = useState(null);
	const [searchValue, setSearchValue] = useState("");
	const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

	const closeSearchBarList = () => {
		setIsSearchBarVisible(false);
	};

	const search = useCallback(() => {
		if (searchValue.length > 3) {
			setIsSearchBarVisible(true);
			RecipesService.getNameAndId()
				.then((response) => {
					if (response instanceof ApiException) {
						setFlagMessage({
							isVisible: true,
							message: "Erro ao buscar receitas!",
							subMessage: "Ocorreu algo inesperado.",
						});
					} else {
						setRecipesList(response);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			setFlagMessage({
				isVisible: true,
				message: "Impossível realizar pesquisa!",
				subMessage: "Digite mais caracteres.",
			});
		}
	}, [searchValue, setFlagMessage]);

	useEffect(() => {
		if (searchValue.length === 4) {
			search();
		}
	}, [searchValue.length, search]);

	const searchBar = useClickOutside(closeSearchBarList);

	return (
		<section className="search-bar" ref={searchBar}>
			<div className="form-container">
				<form onSubmit={(e) => e.preventDefault()}>
					<div className="input-container">
						<input
							type="text"
							placeholder="Pesquisar receita"
							onChange={(e) => setSearchValue(e.target.value)}
						/>
						{recipesList !== null && isSearchBarVisible && (
							<SearchList list={recipesList} value={searchValue} />
						)}
					</div>
					<Button type="button" handleClick={search}>
						<FaSearch />
					</Button>
				</form>
			</div>
		</section>
	);
};
