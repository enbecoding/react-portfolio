import React from 'react'
import { GoMarkGithub} from "react-icons/go"
import { FaLinkedin } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>I am actively seeking work as a front-end, back-end, or full-stack Web Developer</p>
      <div className={styles.icon_container}>
          <a 
            href="https://github.com/enbecoding"
            rel="noreferrer"
            target="_blank"
          >
          <GoMarkGithub size='3rem' color="white"></GoMarkGithub>
          </a>
        
          <a 
            href="https://www.linkedin.com/in/brandon-enbe-hoang/"
            rel="noreferrer"
            target="_blank"
            ><FaLinkedin size='3rem' color="white"></FaLinkedin>
          </a>
          <a 
            href="mailto:brandon.nhoang@gmail.com"
            rel="noreferrer"
            target="_blank"
          ><AiOutlineMail size='3rem' color="white"></AiOutlineMail>
          </a>
      </div>
    </div>
  )
}

export default Contact