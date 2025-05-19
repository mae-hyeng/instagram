import { Link } from "react-router-dom";
import Button from "./Button";
import "./Login.css";
import { useRef } from "react";

const Login = () => {
  const poeRef = useRef(0);
  const passwordRef = useRef(0);

  return (
    <div className="flex flex-direction-c a-i-c p-1">
      <div className="flex flex-direction-c min-w-27 gap-05 t-a-c">
        <div className="login-wrapper">
          <div className="a-i-c h-4">
            <img className="w-13 h-13" src="src/assets/instagram-text.png" />
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
        <div className="wrapper2">
          <div>
            계정이 없으신가요?
            <Link to={""}>가입하기</Link>
          </div>
        </div>
        <div className="wrapper3 flex flex-direction-c gap-1 a-i-c">
          <div>앱을 다운로드하세요.</div>
          <div className="flex gap-1 w-20">
            <div>
              <Link
                to={
                  "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DDCB19DCF-589D-47F1-AFC0-4C5281508AFF%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps://www.instagram.com/accounts/emailsignup/&pli=1"
                }
              >
                <img src={"/src/assets/googleplay.png"} className="img-100" />
              </Link>
            </div>
            <div>
              <Link to={"https://apps.apple.com/kr/app/instagram/id389801252"}>
                <img src={"/src/assets/appstore.png"} className="img-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
