import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jayson</h1>
        <p className={styles.description}>
        I am a Full-stack web developer with a certificate in full-stack web development from Columbia Engineering.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
