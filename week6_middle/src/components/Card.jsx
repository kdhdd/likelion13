import styled from "styled-components";

function Card({ imageUrl, children }) {
  return <CardComponent $imageUrl={imageUrl}>{children}</CardComponent>;
}

const CardComponent = styled.div`
  width: 370px;
  height: 277px;
  flex-shrink: 0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 12px;
  background-image:
    url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
`;

export default Card;
