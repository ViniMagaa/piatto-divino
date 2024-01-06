export const LoadingRecipesContainer = ({ amount }) => {
	let placeholders = [];

	for (let i = 0; i < amount; i++) {
		placeholders.push(
			<div key={i} className="loading-mock">
				<div className="recipe-container">
					<div className="image-container">
						<div className="loading-content"></div>
					</div>
					<div className="description">
						<div className="information">
							<span className="h3 loading-content"></span>
							<span className="small loading-content"></span>
							<span className="small loading-content"></span>
						</div>
						<div className="buttons-container loading-content"></div>
					</div>
				</div>
			</div>
		);
	}

	return placeholders;
};
