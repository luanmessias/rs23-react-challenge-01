import styles from "./styles.module.css";
import { Circle, CheckCircle, Trash } from "phosphor-react";
import { MouseEventHandler, useState } from "react";

export type TaskType = {
  id: string;
  title: string;
  done: boolean;
};

type TaskProps = {
  task: TaskType;
  handleTaskDone: (id: string) => void | MouseEventHandler<HTMLButtonElement>;
  handleDeleteTask: (id: string) => void | MouseEventHandler<HTMLButtonElement>;
};

export default function Task({
  task,
  handleTaskDone,
  handleDeleteTask,
}: TaskProps) {
  return (
    <div className={styles.task}>
      <button
        className={task.done ? styles.done : styles.undone}
        onClick={() => handleTaskDone(task.id)}
      >
        {task.done ? (
          <CheckCircle weight="fill" size={24} />
        ) : (
          <Circle size={24} />
        )}
      </button>

      <span className={styles.description}>{task.title}</span>
      <button
        className={styles.delete}
        onClick={() => handleDeleteTask(task.id)}
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
