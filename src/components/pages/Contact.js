import projectsImg from '../../img/projects.png'

import styles from './contact.module.css'

export default function Contact() {
  return (
    <section className={styles.homeContainer}>
      <img src={projectsImg} alt="Projects Imagem" />
      <h1>
        Contato <span>Projects</span>
      </h1>
      <p>Site para organização e orçamento de seus projetos!</p>
      <p>
        E-mail fictício: <span>contato_comercial@projects.com.br</span>
      </p>
      <p>
        Telefone fictício: <span>+55 11 99999-9999</span>
      </p>
    </section>
  )
}
