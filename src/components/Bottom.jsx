import { Link } from "react-router-dom";
import "./Bottom.css";

const Bottom = () => {
  return (
    <div className="Bottom flex flex-direction-c gap-1 p-4">
      <div className="bottom-wrapper flex flex-center gap-1">
        <Link to={""}>Meta</Link>
        <Link to={""}>소개</Link>
        <Link to={""}>블로그</Link>
        <Link to={""}>채용 정보</Link>
        <Link to={""}>도움말</Link>
        <Link to={""}>API</Link>
        <Link to={""}>개인정보처리방침</Link>
      </div>
      <div className="bottom-wrapper flex flex-center gap-1">
        <select>
          <option>한국어</option>
        </select>
        <div>© 2025 Instagram from Meta</div>
      </div>
    </div>
  );
};

export default Bottom;
