import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <>
    <header>
      <h2>Brandon Hoang</h2>
      <button className={styles.nav_btn}>Home</button>
          <button className={styles.nav_btn}>About</button>
          <button className={styles.nav_btn}>Projects</button>
          <button className={styles.nav_btn}>Contact</button>
    </header>
    </>      
  )
}

export default Header