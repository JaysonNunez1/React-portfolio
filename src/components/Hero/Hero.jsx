import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} style= {{ fontFamily: "GreyQo"}} >Hi, I'm Jayson</h1>
        <p className={styles.description}
        >
     Full-stack web developer with a certificate in Full-Stack Web Development from Columbia Engineering. I have a robust skill set in both front-end and back-end technologies, including React, Node.js, and MongoDB. My expertise extends to designing intuitive user interfaces, developing scalable server-side applications, and integrating APIs.
        </p>
        <a href="mailto:jaysonnunez3@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
