import { useState } from "react";
import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const [openTaskId, setOpenTaskId] = useState(null);

  const setIdDetails = (taskId) => {
    setOpenTaskId((prevId) => (prevId === taskId ? null : taskId));
  };

  return (
    <div className="px-6">
      <ul className="space-y-4 p-6 bg-pink-800 rounded-md shadow">
        {tasks.map((task, index) => (
          <li
            key={`${task.title}-${index}`}
            className="bg-pink-700 rounded-md p-3"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIdDetails(task.id)}
                className="bg-pink-500 rounded-full p-2 text-white"
              >
                {openTaskId === task.id ? <ChevronUp /> : <ChevronDown />}
              </button>

              <button
                onClick={() => onTaskClick(task.id)}
                className={`flex-1 text-left text-white p-2 rounded-md font-bold ${
                  task.isCompleted ? "line-through bg-green-400" : "bg-pink-500"
                }`}
              >
                {task.title}
              </button>

              <button
                onClick={() => onDeleteTaskClick(task.id)}
                className="bg-pink-500 rounded-full p-2 text-white"
              >
                <Trash2 />
              </button>
            </div>

            {openTaskId === task.id && (
              <div className="mt-2 ml-[52px] text-white p-2 rounded-md">
                <p>{task.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
