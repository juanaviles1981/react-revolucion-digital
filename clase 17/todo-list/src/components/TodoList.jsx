import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleCompleted, handleDelete }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleCompleted={toggleCompleted}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
