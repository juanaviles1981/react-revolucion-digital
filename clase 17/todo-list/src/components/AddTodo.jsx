import "./AddTodo.css";

import { useState } from "react";
const AddTodo = ({ handleAddTodo }) => {
  const [newTaskText, setNewTaskText] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    handleAddTodo(newTaskText);
    setNewTaskText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese una nueva tarea"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={handleAdd}>Agregar Tarea</button>
    </div>
  );
};

export default AddTodo;
