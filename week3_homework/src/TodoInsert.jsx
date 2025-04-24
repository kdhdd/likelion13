import { useState } from "react";

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
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>추가</button>
    </div>
  );
}

export default TodoInsert;
