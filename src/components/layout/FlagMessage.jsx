function FlagMessage({ message, subMessage }) {
	return (
		<div className="flag-message">
			<h2>{message}</h2>
			<p>{subMessage}</p>
		</div>
	);
}

export default FlagMessage;
