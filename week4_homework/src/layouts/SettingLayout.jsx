import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SettingLayout() {
  const [name, setName] = useState(localStorage.getItem("name") || "김도현");
  const navigate = useNavigate();

  function handleSave() {
    localStorage.setItem("name", name);
    navigate("/account");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <Container>
      <Label>이름 변경</Label>
      <Row>
        <Input
          value={name}
          onChange={handleChange}
          placeholder="이름을 입력하세요"
        />
        <Button onClick={handleSave}>저장</Button>
      </Row>
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

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Input = styled.input`
  padding: 8px 16px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 240px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background: black;
  color: white;
  cursor: pointer;
`;

export default SettingLayout;
