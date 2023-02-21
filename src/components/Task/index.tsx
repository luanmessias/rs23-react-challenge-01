import styles from './styles.module.css';
import { Circle, CheckCircle, Trash } from 'phosphor-react';

export default function List() {
  return (
    <div className={styles.task}>
      <button className={styles.done}>
        <CheckCircle weight='fill' size={24} />
      </button>
      <button className={styles.undone}>
        <Circle size={24} />
      </button>
      <span className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </span>
      <button className={styles.delete}>
        <Trash size={24} />
      </button>
    </div>
  );
}