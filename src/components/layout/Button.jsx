function Button({children, type = "button", handleClick}) {
return (
  <button type={type} onClick={handleClick}>
    {children}
  </button>
);
}

export default Button;