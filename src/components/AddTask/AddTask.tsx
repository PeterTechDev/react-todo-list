import React, { useState } from "react";
import styles from "./AddTask.module.css";

interface AddTaskProps {
  onAddTask: (taskText: string) => void;
}

export function AddTask({ onAddTask }: AddTaskProps) {
  const [taskText, setNewTask] = useState("");

  const handleSubmitNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskText) {
      alert("Please enter a task");
      return;
    } // Prevent empty tasks from being added

    if (taskText.trim()) {
      onAddTask(taskText);
      setNewTask("");
    }

    alert("New Task: " + taskText); // Placeholder for adding tasks logic
  };

  return (
    <form onSubmit={handleSubmitNewTask} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={taskText}
        onChange={(e) => setNewTask(e.target.value)} // Update state with the input value
        placeholder="Write a new task"
      />
      <button className={styles.button} type="submit">
        Create
      </button>
    </form>
  );
}
