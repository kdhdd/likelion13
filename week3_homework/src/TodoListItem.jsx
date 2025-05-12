import React from "react";
import styled from "styled-components";

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #ffffff; /* ← 화이트 */
  border-bottom: 1px solid #f1f3f5; /* 아래 구분선 (선택) */
  border-radius: 8px; /* 모서리 둥글게 */
  margin-bottom: 8px; /* 리스트 간 간격 */
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  background: red;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
  margin-left: auto;
`;

const Text = styled.span`
  margin-left: 8px;
`;

function TodoListItem({ todo, onToggle, onRemove }) {
  const { id, text, checked } = todo;

  return (
    <ItemBlock>
      <input type="checkbox" checked={checked} onChange={() => onToggle(id)} />

      <Text>{text}</Text>

      <Button onClick={() => onRemove(id)}>삭제</Button>
    </ItemBlock>
  );
}

export default TodoListItem;
