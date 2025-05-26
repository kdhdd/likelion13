import { Link } from "react-router";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Logo>LIKELION</Logo>
      <Login to="/login">
        <LoginText>로그인</LoginText>
      </Login>
    </Container>
  );
}

const Container = styled.nav`
  margin-top: 5px;
  height: 60px;
  padding: 16px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  color: #1C1B1A;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Login = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background: #1C1B1A;
  border-radius: 20px;
`

const LoginText = styled.p`
  color: #FFF;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`



export default Header;
