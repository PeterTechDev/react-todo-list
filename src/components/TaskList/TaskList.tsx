import { Task } from "../../types/task";
import styles from "./TaskList.module.css";
import noTasksIcon from "../../assets/no-data.png";
import { TaskItem } from "../TaskItem/TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TaskList({ tasks, onToggleComplete, onDelete }: TaskListProps) {
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
            {completedTasks} out {totalTasks}
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
          <div className={styles.taskListContainer}>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
