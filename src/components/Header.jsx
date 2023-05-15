import React from 'react'
import styles from "./Header.module.css"


const Header = () => {

  return (
    <>
    <header>
        <a 
          href="https://docs.google.com/document/d/1TNWokYR-gKVqrT13RF0wWHsstdcHyxXXeKgBH25d4-o/edit?usp=sharing"
          rel="noreferrer"
          target="_blank"
          className={styles.nav_btn}
        >
          Resume
        </a>
    </header>
    </>      
  )
}

export default Header