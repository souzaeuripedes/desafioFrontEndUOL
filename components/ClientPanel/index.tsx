import styles from './styles.module.scss'

export function ClientPanel() {
  return (
    <header className={styles.clientPanelContainer}>
      <div className={styles.clientPanelContent}>
        <img className={styles.png} src="/images/icon.png" alt="Icon" /> 
        <h2>Painel do Cliente</h2>
      </div>
    </header>
  )
}