export const poeReg = (value) => {
  if (value === "") return;
  const phoneRegex = /^01[016789]-?\d{3,4}-?\d{4}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (phoneRegex.test(value)) return "";

  if (emailRegex.test(value)) return "";

  const isPhoneLike = /^01\d/.test(value);
  return isPhoneLike
    ? "휴대폰 번호가 정확하지 않습니다. 국가 번호를 포함하여 전체 전화번호를 입력해주세요."
    : "Enter a valid email address.";
};

export const passwordReg = (value) => {
  if (value === "") return;
  return value.length >= 6 ? "" : "6자 이상의 비밀번호를 만드세요.";
};

export const userNameReg = (value) => {
  if (value === "") return;
  return value.length > 0;
};

export const nickNameReg = (value) => {
  if (value === "") return;
  // TODO : 숫자만 입력하면 안되는 정규식 추가
  const nicknameRegex = /^[a-zA-Z0-9._]+$/;
  return nicknameRegex.test(value)
    ? ""
    : "사용자 이름에는 문자, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.";
};
