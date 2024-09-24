import React, { useState } from "react";
import styles from "./AddTodo.module.css";

interface AddTodoProps {
  onAddTodo: (taskText: string) => void;
}

export function AddTodo({ onAddTodo }: AddTodoProps) {
  const [taskText, setNewTask] = useState("");

  const handleSubmitNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskText) {
      alert("Please enter a task");
      return;
    } // Prevent empty tasks from being added

    if (taskText.trim()) {
      onAddTodo(taskText);
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
        placeholder="Add a new task"
      />
      <button className={styles.button} type="submit">
        Create
      </button>
    </form>
  );
}
