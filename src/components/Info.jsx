import Button from "./Button";
import "./Info.css";

const Info = () => {
  return (
    <div className="info-wrapper flex flex-center flex-direction-c flex1 gap-05">
      <div className="flex gap-05 a-i-c">
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
  );
};

export default Info;
