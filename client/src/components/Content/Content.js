import React from "react";
import NewContent from "./NewContent/NewContent";
import styles from "../../style/Content.module.css";
import PopularContent from "./PopularContent/PopularContent";
import EditorsChoice from "./EditorsChoice/EditorsChoice";
import Compilation from "./Compilation/Compilation";
import Infoblock from "../Content/Infoblock/Infoblock";
import Partners from "./LogoPartners/Partners";
import Banner from "./Banner/Banner";

//Content for Home page

function Content() {
  return (
    <div className={styles.content}>
      <Banner />
      <NewContent />
      <PopularContent />
      <EditorsChoice />
      <Compilation />
      <Infoblock />
      <Partners />
    </div>
  );
}

export default Content;
