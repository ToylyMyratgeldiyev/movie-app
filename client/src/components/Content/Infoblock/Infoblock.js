import React from "react";
import styles from "./Infoblock.module.css";
import speakerIcon from "../../../images/icon/speaker.svg";
import calendarIcon from "../../../images/icon/calendar.svg";
import audiobookIcon from "../../../images/icon/audiobook.svg";
import bookIcon from "../../../images/icon/book.svg";

function Infoblock() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <img src={speakerIcon} alt="icon" />
            <span>
              Все лучшие новинки нон фикшн книг и образовательные саммари всегда
              под рукой.
            </span>
          </div>
          <div className={styles.info}>
            <img src={calendarIcon} alt="icon" />
            <span>
              Аудиокнига по дороге на работу и обратно, подарит вам почти месяц
              чтения за год
            </span>
          </div>
          <div className={styles.info}>
            <img src={audiobookIcon} alt="icon" />
            <span>
              Аудиокниги позволяют «читать» несколько часов в день без отрыва от
              текущих дел.
            </span>
          </div>
          <div className={styles.info}>
            <img src={bookIcon} alt="icon" />
            <span>Лучшие книги и аудиоспектакли в живом исполнении</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infoblock;
