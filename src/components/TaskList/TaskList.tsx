import { Task } from "../../types/task";
import styles from "./TaskList.module.css";
import noTasksIcon from "../../assets/no-data.png";

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.taskListSection}>
      <header className={styles.header}>
        <div>
          <span className={styles.createdText}>Total Tasks</span>
          <span className={styles.badge}>{totalTasks}</span>
        </div>
        <div>
          <span className={styles.completedText}>Done</span>
          <span className={styles.badge}>
            {completedTasks} de {totalTasks}
          </span>
        </div>
      </header>
      <div className={styles.taskContainer}>
        {totalTasks === 0 ? (
          <div className={styles.placeholder}>
            <img src={noTasksIcon} alt="No tasks icon" />
            <p>
              <strong>You don't have any tasks yet</strong>
            </p>
            <span>Add a task to get started</span>
          </div>
        ) : (
          // Here will be the task rendering logic (for future)
          <div className={styles.taskListContainer}>Tasks go here</div>
        )}
      </div>
    </section>
  );
}
