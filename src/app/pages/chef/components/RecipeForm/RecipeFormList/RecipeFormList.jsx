import { FaTrashAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { Button, InputLabel, List } from "../../../../../shared/components";

import "./RecipeListForm.css";

export const RecipeFormList = ({ title, listType, inputType, id, placeholder, list, setList }) => {
	const updateList = (setList, newValue, index) => {
		setList((prevList) =>
			prevList.map((prevListItem, prevListItemIndex) =>
				prevListItemIndex === index ? newValue : prevListItem
			)
		);
	};

	const addListItem = (setList) => {
		setList((prevList) => [...prevList, ""]);
	};

	const removeListItem = (setList, index) => {
		setList((prevList) => {
			if (prevList.length === 1) {
				return [""];
			}
			return prevList.filter(
				(_, prevListItemIndex) => prevListItemIndex !== index
			);
		});
	};

	const changeListItemOrder = (direction, list, setList, index) => {
		let newList = [...list];

		[newList[index], newList[index + direction]] = [
			newList[index + direction],
			newList[index],
		];

		setList(newList);
	};

	return (
		<>
			<List
				title={title}
				type={listType}
				list={list.map((item, index) => {
					return (
						<div>
							<InputLabel
								input={{
									type: inputType,
									id: `${id}-${index + 1}`,
									autoComplete: "off",
									placeholder: `${placeholder} ${index + 1}`,
									value: item,
									onChange: (e) => updateList(setList, e.target.value, index),
								}}
							/>
							<div className="action-buttons-container">
								{index !== 0 && (
									<Button
										handleClick={() =>
											changeListItemOrder(-1, list, setList, index)
										}
									>
										<IoIosArrowUp />
									</Button>
								)}
								{index !== list.length - 1 && (
									<Button
										handleClick={() =>
											changeListItemOrder(1, list, setList, index)
										}
									>
										<IoIosArrowDown />
									</Button>
								)}
								<Button handleClick={() => removeListItem(setList, index)}>
									<FaTrashAlt />
								</Button>
							</div>
						</div>
					);
				})}
			/>
			<Button
				handleClick={() => addListItem(setList)}
				customClassName="jungle-green"
			>
				Adicionar {title}
			</Button>
		</>
	);
};
