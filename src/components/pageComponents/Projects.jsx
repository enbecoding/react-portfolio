import React from 'react'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div className={styles.project_container}>
        <div className={styles.project_card}>
          <h3>My Day Today</h3>
          <div className="project_description">
            <p>My foundations capstone at Devmountain desgined for a user to create an organized task list of each day in the week - As well as make posts that display in the form of cards</p>
            <strong>Techs I Used:</strong>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Axios</li>
              <li>Express</li>
              <li>Bootstrap</li>
            </ul>
            <a 
              href="https://github.com/enbecoding/foundations-capstone"
              rel="noreferrer"
              target="_blank"
            >
              GitHub {""}
            </a>{""}|{""}
            <a 
              href="https://www.youtube.com/watch?v=KPrUZnGDXtM"
              rel="noreferrer"
              target="_blank"
            > Video Demo
            </a>
          </div>
        </div>
        <div className={styles.project_card}>
            <h3>Asteroids</h3>
            <p>Here is a classic game where a user plays a spaceship and destroys Asteroids while attempting to survive</p>
            <strong>Techs I Used:</strong>
            <ul>
              <li>HTML Canvas</li>
              <li>JavaScript</li>
            </ul>
            <div className={styles.project_card_links}>
            <a 
              href="https://github.com/enbecoding/asteroids-js"
              rel="noreferrer"
              target="_blank"
            > Github {""} 
            </a>
            {""}|{""}
            <a 
              href="https://enbecodes-asteroids.netlify.app/"
              rel="noreferrer"
              target="_blank"
            > Live Demo
            </a>
            </div>
          </div>
          <div className={styles.project_card}>
            <h3>GSS App</h3>
            <p>My Specializations capstone project for Devmountain where I utilized React to create a fun project that allows a user to track their calorie intake day to day. </p>
            <strong>Techs I Used:</strong>
            <ul>
              <li>React</li>
              <li>CSS Modules</li>
              <li>JavaScript</li>
              <li>MySQL</li>
              <li>Express</li>
              <li>Axios</li>
              <li>Firebase</li>
            </ul>
            <div className={styles.project_card_links}>
            <a 
              href="https://github.com/enbecoding/react-capstone"
              rel="noreferrer"
              target="_blank"
            > Github {""} 
            </a>
            {""}|{""}
            <a 
              href="https://youtu.be/TF4Wcbzix-Q"
              rel="noreferrer"
              target="_blank"
            > Video Demo
            </a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Projects