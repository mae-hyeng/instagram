import Button from "./Button";
import Info from "./Info";
import "./Main.css";
import Post from "./Post";

const Main = () => {
  return (
    <div className="Main w-100">
      <div className="main-wrapper flex">
        <div className="banner flex-center">
          <div className="m-w-5">
            <img
              className="img-15 b-r-50 objfit-contain"
              src="../src/assets/me.jpg"
            />
          </div>
          <Info />
        </div>
        <div className="main-category flex-center gap-1">
          <Button text={"게시물"} type={"bgn"} />
          <Button text={"릴스"} type={"bgn"} />
          <Button text={"태그됨"} type={"bgn"} />
        </div>
        <Post />
      </div>
    </div>
  );
};

export default Main;
