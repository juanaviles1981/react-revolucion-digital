import { useState } from 'react';

function Todos() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>📝 To-Do List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button onClick={handleAdd}>Agregar</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => handleToggle(i)}>✔️</button>
            <button onClick={() => handleDelete(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
