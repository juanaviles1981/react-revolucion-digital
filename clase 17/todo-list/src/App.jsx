import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  // Estado de las tareas
  // const [tasks, setTasks] = useState([]);
  // Llamada desde local storage

  const [tasks, setTasks] = useState(() => {
    const guardado = localStorage.getItem("tareas");
    return guardado ? JSON.parse(guardado) : [];
  });

  //Funcion que agrega una tarea
  const handleAddTodo = (text) => {
    if (text === "") return;

    const newTask = {
      id: Date.now(),
      name: text,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  
    // Agregar al local storage (no se pedia pero lo queria aprobar)
    localStorage.setItem("tareas", JSON.stringify(updatedTasks));
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
      <h1 className="title">TODO LIST</h1>
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
