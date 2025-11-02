import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="px-6">
      <div className="space-y-4 p-6 bg-pink-800 rounded-md shadow flex flex-col">
        <input
          type="text"
          placeholder="Título da tarefa"
          className="border border-pink-300 outline-ínk-400 px-4 py-2 rounded-md"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição da tarefa"
          className="border border-pink-300 outline-ínk-400 px-4 py-2 rounded-md"
          onChange={(event) => setDescription(event.target.value)}
        />
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-md font-medium"
          onClick={() => {
            if (!title.trim() || !description.trim()) {
              return alert("Preencha o titulo e a descrição da tarefa.");
            }
            onAddTaskSubmit(title, description);
          }}
          value={description}
        >
          ADICIONAR
        </button>
      </div>
    </div>
  );
}

export default AddTask;
