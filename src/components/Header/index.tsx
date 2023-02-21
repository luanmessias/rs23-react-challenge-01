import styles from './styles.module.css';
import appLogo from '../../assets/logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={appLogo} alt="todo logo" />
    </header>
  );
}