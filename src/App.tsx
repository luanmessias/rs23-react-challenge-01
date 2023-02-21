import styles from './App.module.css'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'

function App() {

  return (
    <div className="todo-list">
      <Header />
      <div className={styles.wrapper}>
        <Form />
        <List />
      </div>
    </div>
  )
}

export default App
