import React, { useState } from "react";
import styles from "./AddTodo.module.css";

interface AddTodoProps {
  onAddTodo: (taskText: string) => void; // Function passed via props to handle adding tasks
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [taskText, setTaskText] = useState(""); // Local state to manage the input

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the page from reloading
    if (taskText.trim()) {
      onAddTodo(taskText); // Call the parent function to add the task
      setTaskText(""); // Clear the input field after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)} // Update state with the input value
        placeholder="Add a new task"
      />
      <button className={styles.button} type="submit">
        Create
      </button>
    </form>
  );
};

export default AddTodo;
