import React from "react";
import styles from "./hero.module.css";
import ButtonComponent from "../Button/button";

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <h2>First Blog</h2>
        <div>
          <ButtonComponent />
        </div>
      </div>
    </div>
  );
};

export default Hero;
