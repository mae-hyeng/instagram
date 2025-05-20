import "./Button.css";

const Button = ({ text, spanText, type, img, disable, onClick }) => {
  return (
    <button onClick={onClick} className={type} disabled={disable}>
      {img ? <img src={img} /> : ""}
      <span>{spanText}</span>
      {text}
    </button>
  );
};

export default Button;
