import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <>
    <header>
      <h2></h2>
          <button className={styles.nav_btn}>Contact Me
          </button>
    </header>
    </>      
  )
}

export default Header