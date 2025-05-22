// src/pages/DiaryPage.jsx
import React from "react";
import styled from "styled-components";
import Header from "../components/header/ProjectHeader";
import clipIcon from "../assets/images/Clip path group2.svg";

import diary1 from "../assets/images/diary1.png";
import diary2 from "../assets/images/diary2.png";
import diary3 from "../assets/images/diary3.png";

export default function DiaryPage() {
  return (
    <>
      <Header />
      <Container>

        <TopSection>

          <TitleSection>
            <SectionIcon src={clipIcon} alt="Section Icon" />
            <Title>Diary</Title>
          </TitleSection>
          
          <SubText>
            2025 서경대학교 아이디어톤의 소감을 적는 곳 입니다. 여러분이 느꼈던
            모든 것을 적어주세요!
            <br />
            이미지를 올리셔도 됩니다. 배치도 자유롭게 설정할 수 있어요!
            방명록이라고 편하게 생각 부탁함~
          </SubText>

          <WriteButton>
            <WriteButtonText>방명록 쓰러가기</WriteButtonText>
          </WriteButton>
        </TopSection>

        <MemoContiainer>
           <Memo width="782px" height="806px" fontSize="130px">
              다들<br/>
              사랑해요호<br/>
              !!!!!!!
           </Memo>
           <Memo width="884px" height="451px" fontSize="100px" bgColor="#cffd03" top="201px" left="730px" style={{zIndex:"1"}}>
              최강동아리멋사<br/>
              그 중 서경대가 최강
           </Memo>
           <Memo rotate="-6.481deg" width="561px" height="373px" fontSize="90px" bgColor="#7072f3" textColor="#FEFEFE" top="1400px" left="190px" style={{zIndex:"1"}}>
              내가더더더
           </Memo>
           <MemoImage width="1016px" height="575px" top="1000px" left="596.67px" src={diary1} alt="diary1" />
           <Memo width="522px" height="537px" fontSize="32px" bgColor="#FF7984" textColor="#FEFEFE" top="1848px" left="442px">
              글씨를 이렇게도 작게 쓸 수 있어요<br/>
              그치만 이렇게 쓰면 안보이겠죠?<br/>
              시원하게 씁시다<br/>
              글씨를 이렇게도 작게 쓸 수 있어요<br/>
              그치만 이렇게 쓰면 안보이겠죠?<br/>
              시원하게 씁시다<br/>
              글씨를 이렇게도 작게 쓸 수 있어요<br/>
              그치만 이렇게 쓰면 안보이겠죠?<br/>
              시원하게 씁시다
           </Memo>
           <MemoImage width="473px" height="537px" top="2260px" left="52px" src={diary2} alt="diary2" style={{zIndex:"1"}} />
           <Memo width="665px" height="444px" fontSize="64px" bgColor="#593A6D" textColor="#FEFEFE" top="2462px" left="1052px">
              여기 후기 쓰는 곳임<br/>
              그래서 제 소감은요...<br/>
              (이하생략
           </Memo>
           <MemoImage width="1034px" height="1033px" top="2985px" left="343px" src={diary3} alt="diary3" />
        </MemoContiainer>

      </Container>
    </>
  );
}

// ========== styled-components ==========
const Container = styled.div`
  padding: 40px 100px;
  background: #fff;
  zoom: 0.9;
`;

const TopSection = styled.div`
  margin-bottom: 40px;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const SectionIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;

const SubText = styled.p`
  color: #666;
  font-size: 14px;
  margin: 15px 0 30px;
  line-height: 1.5;
`;

const WriteButton = styled.button`
  padding: 20px 30px;
  background: #00ce52;
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  cursor: pointer;
  flex-shrink: 0;
`;

const WriteButtonText = styled.p`
  font-size: 20px;
  margin: 0;
`;

const MemoContiainer = styled.div`
    position: relative;
    margin-top: 173px;
    padding: 80px 103px;
    background: #fff;
`

const Memo = styled.div`
  background-color: ${(props) => props.bgColor || "#FFD15B"};
  color: ${(props) => props.textColor || "#000"};
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: 900;
  display: grid;
  place-items: center;
  position: absolute;
  top: ${(props) => props.top || "0px"};
  left: ${(props) => props.left || "0px"};
  text-align: left;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  transform: rotate(${(props) => props.rotate || "0deg"});
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "200px"};
`;

const MemoImage = styled.img`
    display: grid;
    place-items: center;
    position: absolute;
    top: ${(props) => props.top || "0px"};
    left: ${(props) => props.left || "0px"};
    width: ${(props) => props.width || "200px"};
    height: ${(props) => props.height || "200px"};
    border-radius: 12px;
`;