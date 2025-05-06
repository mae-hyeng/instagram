import Button from "./Button";
import "./Main.css";
import Post from "./Post";

const Main = () => {
  return (
    <div className="Main w-100">
      <div className="main-wrapper flex">
        <div className="banner flex-center">
          <div className="m-w-5">
            <img className="img-15" src="../src/assets/instagram.png" />
          </div>
          <div className="info-wrapper flex flex-center flex-direction-c flex1 gap-05">
            <div className="flex gap-05 align-items-center">
              <div className="mr-1">
                <div>maehyeng</div>
              </div>
              <div>
                <Button text={"팔로우"} type={"follow f-s-1"} />
              </div>
              <div>
                <Button text={"메세지보내기"} type={"message f-s-1"} />
              </div>
              <div>
                <Button text={"..."} type={"bgn f-s-1"} />
              </div>
            </div>
            <div className="flex gap-3">
              <Button text={"게시물 1902"} type={"bgn f-s-1"} />
              <Button text={"팔로워 1.3만"} type={"bgn f-s-1"} />
              <Button text={"팔로우 71"} type={"bgn f-s-1"} />
            </div>
            <div className="flex flex-direction-c">
              <div className="f-w-b">영등포구청</div>
              <div>공공 및 정부 기관</div>
              <div>영등포구청 공식 인스타그램</div>
            </div>
          </div>
        </div>
        <div className="main-category flex-center">
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
