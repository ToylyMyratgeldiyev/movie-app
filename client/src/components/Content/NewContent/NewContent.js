import React from "react";
import imgContent from "../../../images/movie.jpg";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../UnderContent.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function NewContent() {
  return (
    <div className={styles.container_swiper}>
      <div className={styles.head_content}>
        <span>
          <h3>Новинки</h3>
        </span>
        <button className={styles.button_show_all}>Смотреть все</button>
      </div>
      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        <SwiperSlide>
          <img src={imgContent} alt="img" style={{ borderRadius: "20px" }} />
          <h5>Ульяна Соболева</h5>
          <h3 className={styles.title_content}>Завтра будет вчера</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgContent} alt="img" style={{ borderRadius: "20px" }} />
          <h5>Ульяна Соболева</h5>
          <h3 className={styles.title_content}>Завтра будет вчера</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgContent} alt="img" style={{ borderRadius: "20px" }} />
          <h5>Ульяна Соболева</h5>
          <h3 className={styles.title_content}>Завтра будет вчера</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgContent} alt="img" style={{ borderRadius: "20px" }} />
          <h5>Ульяна Соболева</h5>
          <h3 className={styles.title_content}>Завтра будет вчера</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgContent} alt="img" style={{ borderRadius: "20px" }} />
          <h5>Ульяна Соболева</h5>
          <h3 className={styles.title_content}>Завтра будет вчера</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgContent} alt="img" style={{ borderRadius: "20px" }} />
          <h5>Ульяна Соболева</h5>
          <h3 className={styles.title_content}>Завтра будет вчера</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgContent} alt="img" style={{ borderRadius: "20px" }} />
          <h5>Ульяна Соболева</h5>
          <h3 className={styles.title_content}>Завтра будет вчера</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default NewContent;
