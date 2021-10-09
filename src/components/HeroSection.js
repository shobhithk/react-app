import React from "react";
import {Link} from 'react-router-dom'
import styles from "./HeroSection.module.css";
import Welcome from "../assets/Welcome.svg";
import TypeWriter from "../UI/TypeWriter";

const HeroSection = () => {

  
  const buttonClass = `${styles.btn} ${styles['btn-orange']}`;

  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero-grid-item1"]}>
        <h1>mashUP</h1>
        <h3>A portfolio website</h3>    
      </div>
      <div className={styles["hero-grid-item2"]}>
        <img src={Welcome} alt="welcome svg" />
      </div>
      <div className={styles["hero-grid-item3"]}>
        <TypeWriter>Welcome! To mash.UP()</TypeWriter>
      </div>
      <div className={styles["hero-grid-item4"]}>
        <Link to="#" className={buttonClass}>Projects</Link>
        <Link to="#" className={buttonClass}>Contact</Link>
      </div>
    </div>
  );
};

export default HeroSection;
