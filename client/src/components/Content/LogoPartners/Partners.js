import React from "react";
import styles from "./Partners.module.css";
import netflix from '../../../images/icon/netflix.png'
import amazon from '../../../images/icon/amazon.png'
import avon from '../../../images/icon/avon.png'
import auditeria from '../../../images/icon/auditeria.png'
import dell from '../../../images/icon/dell.png'

function Partners() {
  return (
    <div>
      <div className={styles.partners}>
        <div className={styles.wrapper}>
          <span className={styles.item_logo}>
            <a href="https://www.netflix.com/"><img src={netflix} alt="" /></a>
          </span>
          <span className={styles.item_logo}>
            <a href="https://www.amazon.com/"><img src={amazon} alt="" /></a>
          </span>
          <span className={styles.item_logo}>
            <a href="https://www.avon.com/"><img src={avon} alt="" /></a>
          </span>
          <span className={styles.item_logo}>
            <a href="#"><img src={auditeria} alt="" /></a>
          </span>
          <span className={styles.item_logo}>
            <a href="https://www.facebook.com/Dell/"><img src={dell} alt="" /></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Partners;
