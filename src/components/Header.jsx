import Button from "./Button";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header flex w-100">
      <div className="flex-start">
        <Button type={"logo"} />
      </div>
      <div className="flex-end">
        <Button text={"로그인"} type={"login f-w-b"} />
        <Button text={"가입하기"} type={"access f-w-b"} />
      </div>
    </div>
  );
};

export default Header;
