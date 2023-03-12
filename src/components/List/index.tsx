import styles from "./styles.module.css";
import ClipboardSVG from "../../assets/clipboard.svg";
import Task, { TaskType } from "../Task";
import { MouseEventHandler } from 'react'
interface ListProps {
  taskList: TaskType[];
  handleTaskDone: (id: string) => void | MouseEventHandler<HTMLButtonElement>;
  handleDeleteTask: (id: string) => void | MouseEventHandler<HTMLButtonElement>;
}

export default function List({ taskList, handleTaskDone, handleDeleteTask }: ListProps) {
  const taskCreatedAmount = taskList.length;
  const taskFinishedAmount = taskList.filter((task) => task.done).length;

  return (
    <div className={styles.list}>
      {taskList.length === 0 ? (
        <div className={styles.empty}>
          <img src={ClipboardSVG} />
          <strong>There are no tasks</strong>
          <span>Use the form above to create new tasks </span>
        </div>
      ) : (
        <>
          <div className={styles.header}>
            <span className={styles.created}>
              Tasks created <strong>{taskCreatedAmount}</strong>
            </span>
            <span className={styles.finished}>
              Tasks finished{" "}
              <strong>
                {taskFinishedAmount} of {taskCreatedAmount}
              </strong>
            </span>
          </div>
          <div className={styles.content}>
            {taskList.map((task) => (
              <Task
                key={task.id}
                task={task}
                handleTaskDone={handleTaskDone}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
