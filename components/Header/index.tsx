import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img className={styles.png} src="/images/logo.png" alt="Uol" />
      </div>
    </header>
  )
}