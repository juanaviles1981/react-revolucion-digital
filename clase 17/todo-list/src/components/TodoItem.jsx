import "./TodoItem.css";

const TodoItem = ({ task, toggleCompleted, handleDelete }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />
      <span className={`todo-text ${task.completed ? 'completed' : ''}`}>
        {task.name}
      </span>
      <button 
        className="delete-button"
        onClick={() => handleDelete(task.id)}
        aria-label="Eliminar tarea"
      >
        ❌
      </button>
    </li>
  );
};

export default TodoItem;