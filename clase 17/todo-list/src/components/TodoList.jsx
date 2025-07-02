import TodoItem from "./TodoItem";

const TodoList = ({ tasks, handleCompleted, handleDelete }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TodoItem
            task={task}
            handleCompleted={handleCompleted}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
