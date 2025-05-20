import { useRef } from "react";
import Bottom from "../components/Bottom";
import Button from "../components/Button";
import { Link } from "react-router-dom";

import iwi from "../../src/assets/instagram-web-image.png";

const HomePage = () => {
  const poeRef = useRef(0);
  const passwordRef = useRef(0);

  return (
    <div className="p-h-4-w-7">
      <div className="flex flex-direction-r flex-center">
        <div className="p-1 w-60per">
          <img className="w-100 h-100 objfit-contain" src={iwi} />
        </div>
        <div className="w-40per">
          <div className="flex flex-direction-c a-i-c p-1">
            <div className="flex flex-direction-c min-w-27 gap-05 t-a-c">
              <div className="b-n login-wrapper">
                <div className="a-i-c h-4">
                  <img
                    className="w-13 h-13"
                    src="src/assets/instagram-text.png"
                  />
                </div>
                <div className="input-wrapper gap-05 m-t-2">
                  <input
                    ref={poeRef}
                    name="poe"
                    // onChange={onChangeInput}
                    placeholder="휴대폰 번호 또는 이메일 주소"
                  />
                  <input
                    ref={passwordRef}
                    name="password"
                    // onChange={onChangeInput}
                    placeholder="비밀번호"
                  />
                </div>
                <div className="m-t-1">
                  <Button
                    // onClick={onClickAccess}
                    text={"로그인"}
                    img={""}
                    type={"access-primary"}
                    disable={true}
                  />
                </div>
                <div className="f-d-r a-i-c gap-1 w-100 t-c-g">
                  <div className="flex1">
                    <hr />
                  </div>
                  <div>
                    <h3>또는</h3>
                  </div>
                  <div className="flex1">
                    <hr />
                  </div>
                </div>
                <div>
                  <Button
                    text={"Facebook으로 로그인"}
                    img={""}
                    type={"f-login-no-bg"}
                  />
                </div>
                <div className="t-a-c p-h-1 t-c-g">
                  <Link to={""} className="t-c-b">
                    비밀번호를 잊으셨나요?
                  </Link>
                </div>
              </div>
              <div className="p-2">
                <div>
                  계정이 없으신가요?
                  <Link to={"/signUp"}>가입하기</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default HomePage;
