import styles from "./Header.module.css";
import logo from "../../assets/react.svg";
import { AddTask } from "../AddTask/AddTask";

interface AddTaskProps {
  onAddTask: (taskText: string) => void;
}

export function Header({ onAddTask }: AddTaskProps) {
  // Easter egg in the logo, when the user clicks it copy a message to the clipboard
  const handleLogoClick = () => {
    navigator.clipboard.writeText(
      "Thanks using React To-do List! Have a great day!"
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          onClick={handleLogoClick}
          className={styles.logo}
          src={logo}
          alt="React logo"
        />
        <h1 className={styles.title}>
          React To<span>do</span> List
        </h1>
      </div>
      <div className={styles.addTaskContainer}>
        <AddTask onAddTask={onAddTask} />
      </div>
    </header>
  );
}
