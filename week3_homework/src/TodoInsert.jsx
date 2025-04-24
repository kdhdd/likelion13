import { useState } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  background: #20c997;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
`;

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit() {
    onInsert(value);
    setValue("");
  }

  return (
    <Row>
      <Input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>추가</Button>
    </Row>
  );
}

export default TodoInsert;
