import React from "react";
import styles from "../../style/Footer.module.css";
import LogoWB from "../../images/logo/logo_wb.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.container}>
      <span>
        <hr />
      </span>
      <div className={styles.footer}>
        <div>
          <img src={LogoWB} alt="logo" />
        </div>
        <div className={styles.links}>
          <div className={styles.section}>
            <h3>Жанры</h3>
            <Link className={styles.link} to={""}>
              Нонфикшн
            </Link>
            <Link className={styles.link} to={""}>
              Псиология
            </Link>
            <Link className={styles.link} to={""}>
              Бизнес
            </Link>
            <Link className={styles.link} to={""}>
              Финансы
            </Link>
            <Link className={styles.link} to={""}>
              Все жанры
            </Link>
          </div>
          <div className={styles.section}>
            <h3>Категории</h3>
            <Link className={styles.link} to={""}>
              Популярное
            </Link>
            <Link className={styles.link} to={""}>
              Новинки
            </Link>
            <Link className={styles.link} to={""}>
              Выбор редакции
            </Link>
          </div>
          <div className={styles.section}>
            <h3>Разделы</h3>
            <Link className={styles.link} to={""}>
              Как купить
            </Link>
            <Link className={styles.link} to={""}>
              Часто задаваемые вопросы
            </Link>
            <Link className={styles.link} to={""}>
              Сотрудничество
            </Link>
            <Link className={styles.link} to={""}>
              Контакты
            </Link>
          </div>
        </div>
      </div>
      <span>
        <hr />
      </span>
      <div className={styles.right}>
        <span>© 2022, «Аудитерия». Все права защищены.</span>
        <span>Политика конфиденциальности </span>
        <span>Лицензионное соглашение</span>
      </div>
    </div>
  );
}

export default Footer;
