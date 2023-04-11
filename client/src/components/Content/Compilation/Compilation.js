import React from "react";
import img1 from "../../../images/vdoroge.jpg";
import img2 from "../../../images/dlyaotdyha.jpg";
import img3 from "../../../images/dlyaucheby.jpg";
import img4 from "../../../images/dlyaraboty.jpg";
import styles from "./Compilation.module.css";

function Compilation() {
  return (
    <div className={styles.container}>
      <h2>Подборки</h2>
      <div className={styles.compilation}>
        <div className={styles.picCart}>
          <h3 className={styles.compilation_h3}>В дороге</h3>
          <img src={img1} alt="" />
        </div>
        <div className={styles.picCart}>
          <h3 className={styles.compilation_h3}>Для отдыха</h3>
          <img src={img2} alt="" />
        </div>
        <div className={styles.picCart}>
          <h3 className={styles.compilation_h3}>Для учебы</h3>
          <img src={img3} alt="" />
        </div>
        <div className={styles.picCart}>
          <h3 className={styles.compilation_h3}>Для работы</h3>
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Compilation;
