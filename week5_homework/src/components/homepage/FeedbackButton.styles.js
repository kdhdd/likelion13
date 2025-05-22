import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
`;

export const Button = styled.button`
  width: 300px;
  height: 150px;
  flex-shrink: 0;
  border: none;
  border-radius: 16px;
  background: linear-gradient(180deg, #636363 0%, #1c1c1c 100%);
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;

  /* 살짝 눌리는 효과 */
  &:active {
    transform: scale(0.97);
    opacity: 0.9;
  }
`;