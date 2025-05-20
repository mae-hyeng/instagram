import { Link } from "react-router-dom";
import Button from "./Button";
import "./SignUp.css";
import { useRef } from "react";
import { poeReg, passwordReg, nickNameReg } from "./../util/regExp.js";

const SignUp = () => {
  const poeRef = useRef(0);
  const passwordRef = useRef(0);
  const userNameRef = useRef(0);
  const nickNameRef = useRef(0);

  // input태그 키입력 이벤트 및 error msg 삭제
  const onChangeInput = (e) => {
    const name = e.target.name;
    const span = e.target.nextSibling;

    if (span && `${name} errorMsg` === span.classList.value) {
      span.remove();
    }
  };

  // input태그 정규식 체크
  const onBlurInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "poe":
        setMsg(e.target, poeReg(value), name);
        break;
      case "password":
        setMsg(e.target, passwordReg(value), name);
        break;
      case "nickName":
        setMsg(e.target, nickNameReg(value), name);
        break;
      default:
        break;
    }
  };

  // 정규식 이후 span태그 추가해서 오류 메세지 띄워줌
  const setMsg = (target, msg, name) => {
    const span = target.nextSibling;
    if (!msg || (span && span.tagName === "SPAN")) return;
    var errorMsg = document.createElement("span");
    errorMsg.innerHTML = msg;
    errorMsg.className = `${name} errorMsg`;
    target.insertAdjacentElement("afterend", errorMsg);
  };

  // 가입버튼 클릭 이벤트
  // Todo : 정규식 전부 통과시 가입버튼에 disabled 해제하고 스타일 최신화
  const onClickAccess = () => {
    console.log("클릭");
  };

  return (
    <div className="flex flex-direction-c a-i-c p-1">
      <div className="flex flex-direction-c max-w-27 gap-05 t-a-c">
        <div className="wrapper">
          <div className="a-i-c h-4">
            <img className="w-13 h-13" src="src/assets/instagram-text.png" />
          </div>
          <div className="t-a-c t-c-g">
            <h3>친구들의 사진과 동영상을 보려면 가입하세요.</h3>
          </div>
          <div>
            <Button text={"Facebook으로 로그인"} img={""} type={"f-login"} />
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
          <div className="input-wrapper gap-05">
            <input
              ref={poeRef}
              name="poe"
              onChange={onChangeInput}
              onBlur={onBlurInput}
              placeholder="휴대폰 번호 또는 이메일 주소"
            />
            <input
              ref={passwordRef}
              name="password"
              onChange={onChangeInput}
              onBlur={onBlurInput}
              placeholder="비밀번호"
            />
            <input
              ref={userNameRef}
              name="userName"
              onChange={onChangeInput}
              onBlur={onBlurInput}
              placeholder="성명"
            />
            <input
              ref={nickNameRef}
              name="nickName"
              onChange={onChangeInput}
              onBlur={onBlurInput}
              placeholder="사용자 이름"
            />
          </div>
          <div>
            <div className="t-a-c p-h-1 t-c-g">
              저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
              업로드했을 수도 있습니다. <Link to={""}>더 알아보기</Link>
            </div>
          </div>
          <div>
            <Button
              onClick={onClickAccess}
              text={"가입"}
              img={""}
              type={"access-primary"}
              disable={true}
            />
          </div>
        </div>
        <div className="wrapper2">
          <div>계정이 있으신가요?</div>
          <Link to={"/Login"}>로그인</Link>
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

export default SignUp;
