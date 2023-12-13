import { useState, useEffect } from "react";
import { taskStore } from "../stores/taskStore";

export const CreateTask = () => {
  const [task, setTask] = useState("");
  const { addTaskToServer, deleteAllTasks, tasks } = taskStore();

  const taskInput = (e) => {
    setTask(e.target.value);
  };

  const addTaskLocal = async () => {
    if (task.trim() !== "") {
      await addTaskToServer(task);
      setTask(""); // Clear the input field after the task is added
    }
  };

  return (
    <div className="cta-block">
      <input
        type="text"
        className="task-input"
        placeholder="enter task"
        onChange={taskInput}
        value={task}
      />
      <button onClick={addTaskLocal}>Add Task</button>
      <button onClick={deleteAllTasks}>Delete All My Tasks</button>
    </div>
  );
};
