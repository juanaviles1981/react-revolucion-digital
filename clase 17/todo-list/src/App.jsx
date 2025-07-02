import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  // Estado de las tareas
  const [tasks, setTasks] = useState([
    // { id: 1, name: "Estudiar React", completed: false },
    // { id: 2, name: "Hacer Aplicacion de tareas", completed: false },
    // { id: 3, name: "Avanzar en React", completed: false },
  ]);

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
  const handleCompleted = (id) => {
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
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
