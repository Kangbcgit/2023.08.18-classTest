import { Link } from "react-router-dom";
import { styled } from "styled-components";

const FrameHeader = styled.header`

  width: 100%;
  height: 100px;
  border-bottom: 1px solid #e4e4e4;
  &>.inner {
    display: flex;
    justify-content: space-between;
    text-align: center;

    width: 1400px;
    height: 100%;
    margin: 0 auto;
  }
`;
const WrapLogo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  &>h1 {
  }
`;
const WrapGnb = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 800px;
  

  &>a {
    
  }
`;
const WrapLogin = styled.div`
  width: 150px;
  height: 100%;
  &>a {
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
}
`;

const Header = props => {
  return (
    <FrameHeader>
      <div className="inner">
        <WrapLogo>
          <Link to='/'>
            <h1>FUNSHOP</h1>
          </Link>
        </WrapLogo>
        <WrapGnb>
          <Link to='/'>전기전자</Link>
          <Link to='/컴퓨터&모바일'>컴퓨터&모바일</Link>
          <Link to='/'>공구</Link>
          <Link to='/'>자기관리</Link>
          <Link to='/'>키덜트</Link>
          <Link to='/'>프리오더</Link>
        </WrapGnb>
        <WrapLogin>
          <Link to='로그인'>
            <span>로그인</span>
          </Link>
        </WrapLogin>
      </div>
    </FrameHeader>
  );
}
export default Header