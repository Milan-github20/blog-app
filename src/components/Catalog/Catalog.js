import React from "react";
import styles from "./catalog.module.css";

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <p>Our Video Catalog</p>

      <div className={styles.categories}>
        <p>Categories:</p>

        <ul className={styles.categoriesUl}>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              All
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              Drone Shots
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              Nature
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              Actions
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              Featured
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
