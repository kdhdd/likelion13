import styled from "styled-components";
import { Link } from "react-router";

function MyLayout() {
  const storedName = localStorage.getItem("name") || "김도현";
  const user = {
    name: storedName,
    email: "kdso10@skuniv.ac.kr",
    profileImage: "미모티콘.jpg",
  };

  return (
    <Container>
      <ProfileImage src={user.profileImage} alt="프로필 이미지" />
      <UserName>{user.name}</UserName>
      <UserEmail>{user.email}</UserEmail>
      <Page to="/setting">설정</Page>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const UserName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const UserEmail = styled.p`
  color: gray;
`;

const Page = styled(Link)`
  font-size: 1rem;
  font-weight: 600;
  color: gray;
`;

export default MyLayout;
