import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ tasks, toggleCompleted, handleDelete }) => {
  return (
    <div className="todo-list-container">
      {tasks.length === 0 ? (
        <div className="empty-state">
          No hay tareas para mostrar
        </div>
      ) : (
        <ul className="todo-list">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              toggleCompleted={toggleCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
