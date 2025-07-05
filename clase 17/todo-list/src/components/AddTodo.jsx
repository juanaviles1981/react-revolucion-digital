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
      <button
        style={{ backgroundColor: "#333", color: "whitesmoke" }}
        onClick={handleAdd}
      >
        Agregar Tarea
      </button>
    </div>
  );
};

export default AddTodo;
