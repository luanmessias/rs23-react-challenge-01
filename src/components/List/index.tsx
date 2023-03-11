import styles from './styles.module.css';
import ClipboardSVG from '../../assets/clipboard.svg';
import Task from '../Task';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export default function List() {
  
  function handleAddTask() {
    const newTask = {
      id: uuidv4(),
      title: 'New Task',
      done: false,
    }
    setTaskList([...taskList, newTask]);
  }

  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <span className={styles.created}>
          Tasks created <strong>0</strong>
        </span>
        <span className={styles.finished}>
          Tasks finished <strong>0</strong>
        </span>
      </div>
      <div className={styles.content}>
        <Task />
        <Task />
        <Task />
      </div>
      <div className={styles.empty}>
        <img src={ClipboardSVG} />
        <strong>There are no tasks</strong>
        <span>Use the form above to create new tasks </span>
      </div>
    </div>
  );
}