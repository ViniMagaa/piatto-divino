export const SocialLink = ({linkTo, placeHolder}) => {
	return (
		<a href={linkTo} target="_blank" rel="noreferrer">
      {placeHolder}
    </a>
	);
};
