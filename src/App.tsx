import styles from "./App.module.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";
import { TaskType } from "./components/Task";

function App() {
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  function handleAddTask(task: TaskType) {
    setTaskList([...taskList, task]);
  }

  return (
    <div className="todo-list">
      <Header />
      <div className={styles.wrapper}>
        <Form handleAddTask={handleAddTask} />
        <List />
      </div>
    </div>
  );
}

export default App;
