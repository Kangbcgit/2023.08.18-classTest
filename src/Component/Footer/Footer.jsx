import { Link } from "react-router-dom";
import { styled } from "styled-components"

const FrameFooter = styled.footer`
  width: 100%;
  border: 1px solid #000;

  margin-top: 100px;

  &>.wrapContent {
    display: flex;
    justify-content: space-between;
    width: 1000px;
    height: 40px;
    margin: 0 auto;
    &>a {
      display: flex;
      align-items: center;

      height: 100%;
    }
  }
`;

const Footer = props => {
  return(
    <FrameFooter>
      <div className="wrapContent">
        <Link to={'#none'}>회사소개</Link>
        <Link to={'#none'}>이용약관</Link>
        <Link to={'#none'}>개인정보처리방침</Link>
        <Link to={'#none'}>청소년보호정책</Link>
        <Link to={'#none'}>입점/제휴문의</Link>
        <Link to={'#none'}>대량구매</Link>
        <Link to={'#none'}>Contact Us</Link>
        <Link to={'#none'}>고객센터</Link>
      </div>
    </FrameFooter>
  )
}
export default Footer