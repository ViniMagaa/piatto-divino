function List({title, list, type}) {
  return (
		<div>
			<h3>{title}</h3>
			<ul className={`list-${type}`}>
				{list.map((listItem, index) => {
					return <li key={index}>{listItem}</li>;
				})}
			</ul>
		</div>
	);
}

export default List;