import { FaDollarSign } from "react-icons/fa";
import { TbChefHat } from "react-icons/tb";
import { FaClock } from "react-icons/fa6";

import "./RecipeInformationSummary.css";

export const RecipeInformationSummary = ({
	recipe: { cost, difficulty, time },
}) => {
	const minutes = time.minute.toString().padStart(2, "0");
	const formattedTime =
		time.hour === 0 ? `${minutes}min` : `${time.hour}h${minutes}min`;

	const spanStyles = (input) => {
		return {
			background: `rgba(var(--${input.id}), 0.2)`,
			color: `rgb(var(--${input.id}))`,
		};
	};

	return (
		<div className="recipe-information-summary">
			<div className="rounded" style={spanStyles(cost)}>
				<FaDollarSign />
				<span className="bold-italic rounded">{cost.label}</span>
			</div>
			<div className="rounded" style={spanStyles(difficulty)}>
				<TbChefHat />
				<span className="bold-italic">{difficulty.label}</span>
			</div>
			<div>
				<FaClock />
				<span className="bold-italic">{formattedTime}</span>
			</div>
		</div>
	);
};
