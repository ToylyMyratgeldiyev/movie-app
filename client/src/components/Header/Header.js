import React, { useEffect, useState } from "react";
import styles from "../../style/Header.module.css";
import logo from "../../images/logo/logo.svg";
import BannerImg from "../../images/banner1.jpg";
import BannerImg2 from "../../images/banner2.jpg";
import BannerImg3 from "../../images/banner3.jpg";

function Header() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <ul>
            <li>
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
              </div>
            </li>
            <li>
              <div className={styles.bye}>Как купить</div>
            </li>

            <li>
              <div className={styles.faq}>F.A.Q</div>
            </li>
            <li>
              <div className={styles.contacts}>Контакты</div>
            </li>
            <li>
              <div className={styles.search}>Search</div>
            </li>
            <li>
              <div className={styles.button_register}>
                <button>Регистрация</button>
              </div>
            </li>
            <li>
              <div className={styles.button_login}>
                <button>Войти</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
