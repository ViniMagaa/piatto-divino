import { useRef, useState } from "react";

import { Button, InputLabel } from "../../../../shared/components";
import { useAppContext } from "../../../../shared/hooks";
import { validateURL } from "../../../../shared/utils";
import { RecipeFormList } from "./RecipeFormList/RecipeFormList";

import "./RecipeForm.css";

export const RecipeForm = ({ recipe = {}, whenSubmited }) => {
	const { flagMessage, setFlagMessage } = useAppContext();

	const nameRef = useRef();
	const descriptionRef = useRef();
	const difficultyRef = useRef();
	const costRef = useRef();
	const timeHourRef = useRef();
	const timeMinuteRef = useRef();

	const [imgLink, setImgLink] = useState(recipe.img || "");
	const [categoriesList, setCategoriesList] = useState(recipe.categories || []);
	const [ingredientsList, setIngredientsList] = useState(
		recipe.ingredients || [""]
	);
	const [instructionsList, setInstructionsList] = useState(
		recipe.instructions || [""]
	);

	const difficulties = [
		{ id: "easy", label: "Fácil" },
		{ id: "normal", label: "Normal" },
		{ id: "medium", label: "Médio" },
		{ id: "hard", label: "Difícil" },
		{ id: "advanced", label: "Avançado" },
	];

	const categories = [
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

	const costs = [
		{ id: "low", label: "Baixo" },
		{ id: "medium", label: "Médio" },
		{ id: "high", label: "Alto" },
	];

	const addCategoriesListItem = (item) => {
		if (categoriesList.some((categoriesItem) => categoriesItem.id === item.id))
			return;
		setCategoriesList((prevList) => [...prevList, item]);
	};

	const removeCategoriesListItem = (item) => {
		setCategoriesList((prevCategoriesList) =>
			prevCategoriesList.filter(
				(prevCategoriesListItem) => prevCategoriesListItem.id !== item.id
			)
		);
	};

	const findObjectByRef = (array, ref) => {
		return array.find((item) => item.id === ref.current?.value);
	};

	const showEmptyErrorMessage = (submessage) => {
		if (flagMessage.isVisible) return;
		setFlagMessage({
			isVisible: true,
			message: "Preencha todos os dados!",
			subMessage: submessage,
		});
	};

	const handleSubmitForm = () => {
		const recipe = {
			name: nameRef.current.value,
			img: imgLink,
			description: descriptionRef.current.value,
			difficulty: findObjectByRef(difficulties, difficultyRef),
			cost: findObjectByRef(costs, costRef),
			categories: categoriesList,
			time: {
				hour: Number(timeHourRef.current.value),
				minute: Number(timeMinuteRef.current.value)
			},
			ingredients: ingredientsList,
			instructions: instructionsList,
		};

		if (recipe.name.trim() === "") {
			showEmptyErrorMessage("Informe o nome de sua receita.");
			return;
		}

		if (recipe.img.trim() === "" || !validateURL(recipe.img)) {
			showEmptyErrorMessage("Informe um URL válido");
			return;
		}

		if (recipe.description.trim() === "") {
			showEmptyErrorMessage("Adicione uma descrição.");
			return;
		}

		if (recipe.difficulty === undefined) {
			showEmptyErrorMessage("Selecione uma dificuldade.");
			return;
		}

		if (recipe.cost === undefined) {
			showEmptyErrorMessage("Selecione um custo.");
			return;
		}

		if (recipe.categories.length === 0) {
			showEmptyErrorMessage("Informe ao menos uma categoria.");
			return;
		}

		if (recipe.timeHour === 0 && recipe.timeMinute === 0) {
			showEmptyErrorMessage("O tempo não pode ser 0.");
			return;
		}

		if (recipe.timeHour < 0 || recipe.timeMinute < 0) {
			showEmptyErrorMessage("O tempo não pode ser menor que 0.");
			return;
		}

		if (recipe.timeMinute > 59) {
			showEmptyErrorMessage("Os minutos não devem ultrapassar de 59.");
			return;
		}

		if (
			recipe.ingredients.length === 0 ||
			recipe.ingredients.some((ingredient) => ingredient.trim() === "")
		) {
			showEmptyErrorMessage("Informe os ingredientes de sua receita.");
			return;
		}

		if (
			recipe.instructions.length === 0 ||
			recipe.instructions.some((instruction) => instruction.trim() === "")
		) {
			showEmptyErrorMessage("Informe as instruções de sua receita.");
			return;
		}

		whenSubmited(recipe);
	};

	return (
		<div className="recipe-form-container">
			<form onSubmit={(e) => e.preventDefault()}>
				<div>
					<h2>Sobre a receita</h2>

					<div className="field">
						<div className="col">
							<InputLabel
								label={<h3>Nome da Receita</h3>}
								input={{
									id: "name",
									type: "text",
									autoComplete: "off",
									placeholder: "Ex: Macarrão ao molho Presto",
									ref: nameRef,
									defaultValue: recipe.name || "",
								}}
							/>

							<InputLabel
								label={<h3>Descrição</h3>}
								input={{
									id: "description",
									type: "textarea",
									autoComplete: "off",
									placeholder: "Conte sobre o que é a receita",
									ref: descriptionRef,
									defaultValue: recipe.description || "",
								}}
							/>
						</div>

						<div className="col">
							<InputLabel
								label={<h3>Imagem</h3>}
								input={{
									id: "img",
									type: "url",
									autoComplete: "off",
									placeholder: "Cole o link de uma imagem",
									value: imgLink,
									onChange: (e) => setImgLink(e.target.value),
								}}
							/>

							<div>
								<h3>Visualize sua imagem</h3>
								<div className="image-container">
									<img
										src={imgLink}
										alt="Imagem não encontrada ou não inserida"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div>
					<h2>Informações principais</h2>

					<div className="field">
						<div className="col">
							<InputLabel
								label={<h3>Dificuldade</h3>}
								input={{
									id: "name",
									type: "select",
									ref: difficultyRef,
									defaultValue: recipe.difficulty?.id || "",
								}}
							>
								{difficulties.map((difficulty) => (
									<option key={difficulty.id} value={difficulty.id}>
										{difficulty.label}
									</option>
								))}
							</InputLabel>

							<div>
								<h3>Categorias</h3>

								<div className="checkboxes">
									{categories.map((category) => {
										return (
											<InputLabel
												key={category.id}
												label={category.label}
												input={{
													type: "checkbox",
													id: category.id,
													defaultChecked: categoriesList.some(
														(recipeCategory) =>
															recipeCategory.id === category.id
													),
													onChange: (e) => {
														if (e.target.checked) {
															addCategoriesListItem(category);
														} else {
															removeCategoriesListItem(category);
														}
													},
												}}
											/>
										);
									})}
								</div>
							</div>
						</div>

						<div className="col">
							<InputLabel
								label={<h3>Custo</h3>}
								input={{
									id: "cost",
									type: "select",
									ref: costRef,
									defaultValue: recipe.cost?.id || "",
								}}
							>
								{costs.map((cost) => (
									<option key={cost.id} value={cost.id}>
										{cost.label}
									</option>
								))}
							</InputLabel>

							<div>
								<h3>Tempo médio para finalizar a receita</h3>

								<div className="medium-time">
									<InputLabel
										label="Hora(s)"
										input={{
											type: "number",
											id: "timeHour",
											autoComplete: "off",
											ref: timeHourRef,
											min: 0,
											defaultValue: recipe.timeHour,
										}}
									/>

									<InputLabel
										label="Minuto(s)"
										input={{
											type: "number",
											id: "timeMinute",
											autoComplete: "off",
											ref: timeMinuteRef,
											min: 0,
											max: 59,
											defaultValue: recipe.timeMinute,
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="field recipe-form-lists">
					<div className="col instructions">
						<RecipeFormList
							title="Instruções"
							listType="number"
							inputType="textarea"
							id="instruction"
							placeholder="Passo nº"
							list={instructionsList}
							setList={setInstructionsList}
						/>
					</div>

					<div className="col ingredients">
						<RecipeFormList
							title="Ingredientes"
							listType="disc"
							inputType="text"
							id="ingredient"
							placeholder="Ingrediente nº"
							list={ingredientsList}
							setList={setIngredientsList}
						/>
					</div>
				</div>

				<Button
					type="submit"
					handleClick={handleSubmitForm}
					customClassName="raw-umber"
				>
					{recipe.name ? "Atualizar receita" : "Publicar receita"}
				</Button>
			</form>
		</div>
	);
};
