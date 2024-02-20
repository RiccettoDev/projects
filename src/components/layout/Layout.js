import { Outlet } from 'react-router-dom'

import Navibar from './Navibar'
import Footer from './Footer'

import styles from './layout.module.css'

export default function Layout() {
  return (
    <>
      <Navibar />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
