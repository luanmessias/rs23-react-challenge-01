import { PlusCircle } from "phosphor-react";
import { ChangeEvent, InvalidEvent, useState } from "react";
import styles from "./styles.module.css";
import { TaskType } from "../Task";
import { v4 as uuidv4 } from "uuid";
interface FormProps {
  handleAddTask: (task: TaskType) => void;
  taskAlreadyExists: (title: string) => boolean;
}

export default function Form({ handleAddTask, taskAlreadyExists }: FormProps) {
  const [taskText, setTaskText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setErrorMessage("");
    setTaskText(event.target.value);
  }

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    const taskExists = taskAlreadyExists(taskText);

    if (taskExists) {
      setErrorMessage("Task already exists");
      return;
    }

    const newTask = {
      id: uuidv4(),
      title: taskText,
      done: false,
    };

    handleAddTask(newTask);
    setTaskText("");
  }

  function handleTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Please enter a task");
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={handleTask}
        onInvalid={handleTaskInvalid}
        required
      />
      <button type="submit">
        Add <PlusCircle size={24} />
      </button>
      <div className={styles.error}>{errorMessage}</div>
    </form>
  );
}
