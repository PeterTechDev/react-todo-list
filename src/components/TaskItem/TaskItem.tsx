import { Task } from "../../types/task";
import styles from "./TaskItem.module.css";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TaskItem({ task, onToggleComplete, onDelete }: TaskItemProps) {
  return (
    <div
      className={`${styles.taskItem} ${
        task.isCompleted ? styles.completed : ""
      }`}
    >
      <label className={styles.taskLabel}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggleComplete(task.id)}
        />
        <span>{task.text}</span>
      </label>
      <button onClick={() => onDelete(task.id)} className={styles.deleteButton}>
        🗑️
      </button>
    </div>
  );
}
