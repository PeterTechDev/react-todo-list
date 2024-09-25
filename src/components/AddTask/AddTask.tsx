import React, { useState, useEffect } from "react";
import styles from "./AddTask.module.css";

interface AddTaskProps {
  onAddTask: (taskText: string) => void;
}

export function AddTask({ onAddTask }: AddTaskProps) {
  const [taskText, setNewTask] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateTask = (text: string) => {
    if (!text) return "Please enter a task";
    if (text.length > 50) return "Task text is too long";
    if (text.length < 3) return "Task text is too short";
    if (text.includes("JS")) return "Task text contains 'JS'. It's not allowed";
    return null;
  };

  const handleSubmitNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateTask(taskText);
    if (error) {
      setErrorMessage(error);
      return;
    }

    if (taskText.trim()) {
      onAddTask(taskText);
      setNewTask("");
      setErrorMessage(null); // Clear error on successful task addition
    }
  };

  // Clears the error when the user starts typing again
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  // Sets a timeout to clear the error message after 3 seconds
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 3000); // 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer on component unmount or if the error changes
    }
  }, [errorMessage]);

  return (
    <form onSubmit={handleSubmitNewTask} className={styles.form}>
      <input
        className={
          errorMessage ? `${styles.input} ${styles.inputError}` : styles.input
        }
        type="text"
        value={taskText}
        onChange={handleInputChange}
        placeholder="Write a new task"
      />
      <button className={styles.button} type="submit">
        Add
      </button>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </form>
  );
}
