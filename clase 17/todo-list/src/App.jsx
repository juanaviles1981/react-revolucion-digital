import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";

function App() {
   // Llamada desde local storage

  const [tasks, setTasks] = useState(() => {
    const guardado = localStorage.getItem("tareas");
    return guardado ? JSON.parse(guardado) : [];
  });

  // Estado para mostrar tareas pendientes
  const [mostrarActivas, setMostrarActivas] = useState(false);
  
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

// Filtrar
const filteredTasks = mostrarActivas 
    ? tasks.filter(task => !task.completed) 
    : tasks;

    return (
    <>
      <h1 className="title">TODO LIST</h1>
      <AddTodo handleAddTodo={handleAddTodo} />
      <Filter 
      mostrarActivas={mostrarActivas}
      setMostrarActivas={setMostrarActivas}/>  
      <TodoList
        tasks={filteredTasks}
        toggleCompleted={toggleCompleted}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
