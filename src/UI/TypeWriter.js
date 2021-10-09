import React from "react";
import styles from './TypeWriter.module.css'

const TypeWriter = (props) => {

  const typeClass = `${styles["line-1"]} ${styles["anim-typewriter"]}`;

  return <p className={typeClass}>{props.children}</p>;
};

export default TypeWriter;
