import styled from "styled-components";
import Header from "../components/header/ProjectHeader";
import clipIcon from "../assets/images/Clip path group.svg";

import img1 from "../assets/images/project1.png";
import img2 from "../assets/images/project2.png";
import img3 from "../assets/images/project3.png";
import img4 from "../assets/images/project4.png";
import img5 from "../assets/images/project5.png";
import img6 from "../assets/images/project6.png";
import img7 from "../assets/images/project7.png";
import img8 from "../assets/images/project8.png";

export default function ProjectPage() {
    const projectList = [
    { id: 1, img: img1, title: "프로젝트 1" },
    { id: 2, img: img2, title: "프로젝트 2" },
    { id: 3, img: img3, title: "프로젝트 3" },
    { id: 4, img: img4, title: "프로젝트 4" },
    { id: 5, img: img5, title: "프로젝트 5" },
    { id: 6, img: img6, title: "프로젝트 6" },
    { id: 7, img: img7, title: "프로젝트 7" },
    { id: 8, img: img8, title: "프로젝트 8" },
  ];

  return (
    <>
      <Header />
      <MainContainer>
        {/* 타이틀 영역 */}
        <TitleSection>
          <SectionIcon src={clipIcon} alt="Section Icon"/>
          <Title>Project</Title>
        </TitleSection>
        <SubText>
          2025 서경대학교 아이디어톤의 프로젝트 파일입니다. 클릭하시면 상세한 정보를 확인하세요!<br />
          모아 놓으니 더 예쁘네요. 다들 너무 수고하셨습니다!  
        </SubText>

        {/* 프로젝트 그리드 */}
        <Grid>
          {projectList.map((project) => (
            <Card key={project.id}>
              <Image src={project.img} alt={project.title} />
            </Card>
          ))}
        </Grid>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  padding: 40px 100px;
  background: #fff;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 12px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-right: 16px;
`;

const SubText = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 56px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: 24px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 1 0 0;
  aspect-ratio: 844 / 474.94;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
