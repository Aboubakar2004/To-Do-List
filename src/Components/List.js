import React, { useState } from "react";

function List() {
  const [task, setTask] = useState("");
  const [click, setClick] = useState(false);
  const [tasklist, setTasklist] = useState([]);
  const [selectedtask, setSelectedtask] = useState([]);

  function handleClick() {
    setTasklist([...tasklist, task]);
    setTask("");
    setClick(true);
  }

  function SelectedTask(item) {
    setSelectedtask(
      selectedtask.includes(item)
        ? selectedtask.filter((selectedtask) => selectedtask !== item)
        : [...selectedtask, item]
    );
  }

  function RemoveTask(item) {
    setTasklist(tasklist.filter((task) => task !== item));
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-4 bg-gray-200 rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">TO DO LIST</h1>
        <input
          className="w-full mb-4 p-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 rounded-md"
          placeholder="Entrez une tache"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="mx-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleClick}
        >
          Ajouter
        </button>
        {click && (
          <ul className="mt-4">
            {tasklist.map((item, index) => (
              <li
                key={index}
                onClick={() => SelectedTask(item)}
                className={`p-2 border-b border-gray-300 ${
                  selectedtask.includes(item) ? "line-through" : ""
                }`}
              >
                {item}
                <button
                  className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                  onClick={() => RemoveTask(item)}
                >
                  Supprimer la tâche
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default List;
