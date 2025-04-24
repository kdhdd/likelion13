import React from "react";

function TodoListItem({ todo, onToggle, onRemove }) {
  const { id, text, checked } = todo;

  return (
    <div>
      <input type="checkBox" checked={checked} onChange={() => onToggle(id)} />

      <span>{text}</span>

      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

export default TodoListItem;
