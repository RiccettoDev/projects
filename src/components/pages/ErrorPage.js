import styles from './errorPage.module.css'

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1>Erro: 404!</h1>
        <h2>Ops! Não encontramos essa páginas!</h2>
        <h2>Tente utilizar um endereço válido.</h2>
      </div>
    </div>
  )
}
