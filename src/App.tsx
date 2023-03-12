import styles from "./App.module.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";
import { TaskType } from "./components/Task";
import {MouseEventHandler} from 'react'

function App() {
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  function handleAddTask(task: TaskType) {
    setTaskList([task, ...taskList]);
  }

  function handleTaskDone(
    id: string
  ): void | MouseEventHandler<HTMLButtonElement> {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTaskList(newTaskList);
  }

  function taskAlreadyExists(title: string): boolean {
    const taskExists = taskList.find((task) => task.title === title);
    if (taskExists) {
      return true;
    }
    return false;
  }

  function handleDeleteTask(
    id: string
  ): void | MouseEventHandler<HTMLButtonElement> {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  }

  return (
    <div className="todo-list">
      <Header />
      <div className={styles.wrapper}>
        <Form
          handleAddTask={handleAddTask}
          taskAlreadyExists={taskAlreadyExists}
        />
        <List
          taskList={taskList}
          handleTaskDone={handleTaskDone}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
