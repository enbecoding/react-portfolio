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
            <h3>BMI Calculator</h3>
            <p>Here is a fun and simple react project a classmate and I made where a user can input their height, weight and age and receive their current BMI</p>
            <strong>Techs We Used:</strong>
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <a 
              href="https://github.com/enbecoding/bmi-calculator"
              rel="noreferrer"
              target="_blank"
            > Github {""} 
            </a>
            {""}{""}
            <a 
              href="https://hj-bmi-calculator.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >Live Demo

            </a>
          </div>
      </div>
    </div>
  )
}

export default Projects