import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <a
        className={styles.footerLink}
        href="https://github.com/RiccettoDev"
        target="_blank"
      >
        &copy; 2024 - By Eduardo Riccetto
      </a>
    </div>
  )
}
