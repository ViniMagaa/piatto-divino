import "./Button.css";

export const Button = ({ children, type, handleClick, customClassName }) => {
  return (
    <button
      type={type || "button"}
      onClick={handleClick}
      className={`btn ${customClassName}`}
    >
      {children}
    </button>
  );
};
