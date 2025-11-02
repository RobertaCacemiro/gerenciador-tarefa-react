import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Sempre que tasks mudar, salva no localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);

    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: Math.floor(Math.random() * (1000 - 0 + 1)) + 0,
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen min-h-screen bg-pink-200 flex justify-center">
      <div className="w-[500px] space-y-4">
        <h1 className="text-pink-600 text-3xl text-center font-bold p-6">
          GERENCIADOR DE TAREFAS
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

// JSX - aceita apenas um elemento para retorno
