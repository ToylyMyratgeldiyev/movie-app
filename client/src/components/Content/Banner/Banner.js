import React from "react";
import styles from "../../../style/Header.module.css";

import bannerImg from "../../../images/banner1.jpg";

function Banner() {
  return (
      <div className={styles.banner}>
        <div className={styles.backgroundImg}>
          <img src={bannerImg} alt="" />
        </div>
        <div className={styles.text}>
          <span>
            <h1>Книги, которые вам хочется слушать</h1>
          </span>
          <span>
            <h3>
              Лучшая подборка аудиокниг по психологиии саморазвитию за все годы
              издательства...
            </h3>
          </span>
        </div>
      </div>
  );
}

export default Banner;
