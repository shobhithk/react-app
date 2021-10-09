import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/mashUP_2.png";

function Navbar() {
  const [toggleBurger, setToggleBurger] = useState(false);

  const hamburgerHandler = () => {
    setToggleBurger((prev) => !prev);
  };

  const navClassActive = `${styles["nav-menu"]} ${
    toggleBurger ? styles.active : ""
  }`;
  const hamClassActive = `${styles.hamberger} ${
    toggleBurger ? styles.active : ""
  }`;

  return (
    <header>
      <nav className={styles.navbar}>
        <NavLink to="/">
          <img src={logo} alt="logo" className={styles["nav-logo"]} />
        </NavLink>
        <ul className={navClassActive}>
          <li className={styles["nav-item"]}>
            <NavLink
              activeStyle={{color: "#2A0944"}}
              to="/" exact
              className={styles["nav-link"]}
            >
              Home
            </NavLink>
          </li>
          <li className={styles["nav-item"]}>
            <NavLink
              activeStyle={{color: "#2A0944"}}
              to="/projects"
              className={styles["nav-link"]}
            >
              Projects
            </NavLink>
          </li>
          <li className={styles["nav-item"]}>
            <NavLink
              activeStyle={{color: "#2A0944"}}
              to="/login"
              className={styles["nav-link"]}
            >
             <pre> Login <i className="far fa-user"></i> </pre>
            </NavLink>
          </li>
        </ul>
        <div className={hamClassActive} onClick={hamburgerHandler}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
