import { useState } from "react";
import { Header } from "./components/Header/Header";
import "./global.css";
import { Task } from "./types/task";
import { TaskList } from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      text: taskText,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleCompleteTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <Header />
      <main>
        <TaskList
          tasks={tasks}
          onToggleComplete={toggleCompleteTask}
          onDelete={deleteTask}
        />
      </main>
      <footer>This is the footer</footer>
    </>
  );
}

export default App;
