import { Link } from 'react-router-dom'

import styles from './navibar.module.css'

import logo from '../../img/costs_logo.png'

export default function Navibar() {
  return (
    <nav className={styles.container}>
      <div className={styles.containerImg}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="projects">
          Projetos
        </Link>
        <Link className={styles.link} to="contact">
          Contato
        </Link>
      </div>
    </nav>
  )
}
