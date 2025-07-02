import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  // Estado de las tareas
  const [tasks, setTasks] = useState([]);

  //Funcion que agrega una tarea
  const handleAddTodo = (text) => {
    const newTask = {
      id: Date.now(),
      name: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };
  //Funcion que marca como completada la tarea
  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //Funcion que elimina la tarea
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>ToDo List</h1>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList
        tasks={tasks}
        toggleCompleted={toggleCompleted}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
