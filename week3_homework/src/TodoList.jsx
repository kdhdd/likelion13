import React from "react";
import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const ListBlock = styled.ul`
  width: 100%;
  margin-top: 16px;
  padding: 0;
  list-style: none;
`;

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <ListBlock>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ListBlock>
  );
}

export default TodoList;
