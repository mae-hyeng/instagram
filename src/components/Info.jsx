import "./Info.css";
import Button from "./Button";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { InstagramStateContext } from "../App";

import link from "../../src/assets/link.png";

const Info = () => {
  const params = useParams();
  const id = params.id;

  const user = useContext(InstagramStateContext);
  const userInfo = user.find((u) => u.id === id);

  return (
    <div className="info-wrapper flex flex-center flex-direction-c flex1 gap-05">
      <div className="flex gap-05 a-i-c">
        <div className="mr-1">
          <div>{userInfo.id}</div>
        </div>
        <Button text={"팔로우"} type={"l1-follow f-s-1"} />
        <Button text={"메세지보내기"} type={"l1-message f-s-1"} />
        <Button text={"..."} type={"bgn f-s-1"} />
      </div>
      <div className="flex gap-3">
        <Button
          spanText={"게시물 "}
          text={userInfo.post}
          type={"l2-post bgn f-s-1"}
        />
        <Button
          spanText={"팔로워 "}
          text={userInfo.follower}
          type={"l2-follower bgn f-s-1"}
        />
        <Button
          spanText={"팔로우 "}
          text={userInfo.follow}
          type={"l2-follow bgn f-s-1"}
        />
      </div>
      <div className="flex flex-direction-c">
        <div className="f-w-b">영등포구청</div>
        <div>공공 및 정부 기관</div>
        <div>영등포구청 공식 인스타그램</div>
        <div className="a-i-c">
          <img src={link} className="w-1 h-1 mr-05" />
          <Link className="t-c-b" to={"https://github.com/mae-hyeng"}>
            https://github.com/mae-hyeng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
