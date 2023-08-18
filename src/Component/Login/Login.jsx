import { styled } from "styled-components"

const FrameLogin = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  
  margin: 150px auto 172px;

  width: 500px;
  height: 500px;
  border: 1px solid #e6e6e6;
  &>h1 {
    margin-top: 30px;
    width: fit-content;
    height: fit-content;
  }
  &>form {
    margin-top: 70px;
    width: 300px;
    &>input:nth-of-type(1),
    input:nth-of-type(2) {
      width: 300px;
      height: 50px;

      margin-bottom: 20px;
      padding: 10px;

      border: none;
      background: #f7f7f7;
      border-radius: 5px;
      &:focus {
        outline: none;
      }
    }
    &>.bottom {
      display: flex;
      align-items: center;
      &>input {
        width: 20px;
        height: 20px;
      }
    }
    &>button {
      width: 300px;
      height: 50px;
      border: none;
      border-radius: 2px;
      margin-top: 10px;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      &:nth-of-type(1) {
        background: #0f5bff;
      }
      &:nth-of-type(2) {
        position: relative;
        background: #F7D500;

        &>img {
          position: absolute;
          left: 7%;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

const Login = props => {
  return(
    <FrameLogin>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="아이디를 입력해 주세요." />
        <input type="password" placeholder="비밀번호를 입력해 주세요." />
        <div className="bottom">
          <input type="checkbox" />
          <span>아이디 저장하기</span>
        </div>
        <button>로그인</button>
        <button><img src={`${process.env.PUBLIC_URL}/images/logo/kakao.png`} alt="" /><span>카카오 계정으로 로그인</span></button>
      </form>
    </FrameLogin>
  )
}
export default Login