import styled from "styled-components";
import { Link } from "react-router";
import Card from "./components/Card";

import img1 from "./assets/img_1.png";
import img2 from "./assets/img_2.png";
import img3 from "./assets/img_3.png";

export default function App() {
  return (
    <MainContainer>
      <Title>안녕하세요, <br />멋쟁이사자처럼입니다.</Title>
      <Goto to="/project">
        <GotoText>멋사 바로가기</GotoText>
      </Goto>
      <Cards>
        <Card imageUrl={img1}>
          <span style={{ color: "white", fontSize: "0.75rem", fontWeight: 400, marginLeft: "16px", marginBottom: "16px" }}>
            이젠 추억이죠?
            <br />
            <span style={{ fontSize: "1.25rem", fontWeight: 500 }}>
              단체 OT
            </span>
          </span>
        </Card>
        <Card imageUrl={img2}>
          <span style={{ color: "white", fontSize: "0.75rem", fontWeight: 400, marginLeft: "16px", marginBottom: "16px" }}>
            상상을 현실로
            <br />
            <span style={{ fontSize: "1.25rem", fontWeight: 500 }}>
              아이디어톤
            </span>
          </span>
        </Card>
        <Card imageUrl={img3}>
          <span style={{ color: "white", fontSize: "0.75rem", fontWeight: 400, marginLeft: "16px", marginBottom: "16px" }}>
            우리들의 이야기
            <br />
            <span style={{ fontSize: "1.25rem", fontWeight: 500 }}>
              멋사 MT
            </span>
          </span>
        </Card>
      </Cards>
    </MainContainer>
  );
}

const Title = styled.p`
  color: #1C1B1A;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 62.4px */
`;

const MainContainer = styled.div`
  padding: 100px;
  margin-left: 0px;
  margin-top: 100px;
`;

const Cards = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Goto = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 130px;
  height: 40px;
  background: #1C1B1A;
  border-radius: 20px;
  gap: 10px;
  margin-top: 25px;
`

const GotoText = styled.p`
  color: #FFF;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`