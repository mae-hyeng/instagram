import "./Button.css";

const Button = ({ text, type, img, disable, onClick }) => {
  return (
    <button onClick={onClick} className={type} disabled={disable}>
      {img ? <img src={img} /> : ""}
      {text}
    </button>
  );
};

export default Button;
