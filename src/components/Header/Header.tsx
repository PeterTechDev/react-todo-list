import styles from "./Header.module.css";
import logo from "../../assets/react.svg";
import AddTodo from "../AddTodo/AddTodo";

export function Header() {
  const handleAddTodo = (taskText: string) => {
    console.log("New Task: ", taskText); // Placeholder for adding tasks logic
  };
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="React logo" />
        <h1 className={styles.title}>React TODO List</h1>
      </div>
      <div className={styles.addTodoContainer}>
        <AddTodo onAddTodo={handleAddTodo} />
      </div>
    </header>
  );
}
