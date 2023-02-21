import { PlusCircle } from 'phosphor-react'
import styles from './styles.module.css'

export default function Form() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Add a new task" />
      <button type="submit">Add <PlusCircle size={24} /></button>
    </form>
  );
}
