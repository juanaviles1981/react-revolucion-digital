import { useState } from "react";
const AddTodo = ({handleAddTodo}) => {
  
    const handleAdd = (e) =>{
        e.preventDefault();
        console.log(input)
        handleAddTodo(input)
        setInput("")
    }
  
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese una nueva tarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Agregar Tarea</button>
    </div>
  );
};

export default AddTodo;
