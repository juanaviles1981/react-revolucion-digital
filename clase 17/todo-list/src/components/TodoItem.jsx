const TodoItem = ({ task, toggleCompleted, handleDelete }) => {
    return (
      <li style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompleted(task.id)}
        />
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            flexGrow: 1,
            padding: "10px",
            color: "#333"
          }}
        >
          {task.name}
        </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => handleDelete(task.id)}
        >
          ❌
        </span>
      </li>
    );
  };
  
  export default TodoItem;
  