import React from "react";
import poster from "../../images/poster_product_page.jpg";
import styles from "../../components/Product_content/Product_content.module.css";
import ReactPlayer from "react-player";

function Product_content() {
  return (
    <div className={styles.product}>
      <div className={styles.poster}>
        <img src={poster} alt="" />
        <div className={styles.videoPleer}>
          <ReactPlayer width='437px' controls='true' url="https://www.youtube.com/watch?v=erWkCXBbjiA&t=17s" />
        </div>
      </div>
      <div className={styles.title}>
        <h1>Гарри Поттер и Орден Феникса</h1>
        <div className={styles.avtors}>
          <div className={styles.about}>
            <span className={styles.x}>Год производства</span>
            <span className={styles.y}>2014</span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Платформа</span>
            <span className={styles.y}>AMC</span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Страна</span>
            <span className={styles.y}>США</span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Жанр</span>
            <span className={styles.y}>драма</span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Слоган</span>
            <span className={styles.y}>"The battle for CTRL begins"</span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Режиссер</span>
            <span className={styles.y}>
              Хуан Хосе Кампанелья, Карин Кусама, Дэйзи фон Шерлер Майер
            </span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Сценарий</span>
            <span className={styles.y}>
              Кристофер Кентвелл, Кристофер С. Роджерс, Зак Уэдон
            </span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Продюсер</span>
            <span className={styles.y}>
              Мелисса Бернштейн, Кристофер Кентвелл, Джефф Фрейлих
            </span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Оператор</span>
            <span className={styles.y}>
              Эванс Браун, Нельсон Крегг, Джеф Джёр
            </span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Композитор</span>
            <span className={styles.y}>Пол Хаслингер</span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Художник</span>
            <span className={styles.y}>
              Кристофер Браун, Крэйг Стернс, Ола Маслик
            </span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Монтаж</span>
            <span className={styles.y}>
              Роберт Комацу, Кевин Д. Росс, Рэйчел Гудлетт
            </span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Премьера в Росcии</span>
            <span className={styles.y}>21 апреля 2015</span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Премьера в мире</span>
            <span className={styles.y}>8 марта 2014</span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Возраст</span>
            <span className={styles.y}>16+</span>
          </div>
          <div className={styles.about}>
            <span className={styles.x}>Время</span>
            <span className={styles.y}>43 мин</span>
          </div>
        </div>
        <div className={styles.description}>
          До рождения Гарри в 1980 году провидица Сивилла Трелони произнесла в
          беседе с главой Хогвартса Дамблдором пророчество о том, что в конце
          июля родится мальчик, родители которого три раза бросали вызов
          вступившему на путь зла бывшему ученику Хогвартса Волан-де-Морту, и
          который или сможет победить Тёмного Лорда, или погибнет от его рук.
          Под условия пророчества подходили Гарри Поттер и родившийся на день
          раньше сын мракоборцев Фрэнка и Алисы Невилл Долгопупс. Лорд
          Волан-де-Морт, узнав о пророчестве
        </div>
      </div>
    </div>
  );
}

export default Product_content;
