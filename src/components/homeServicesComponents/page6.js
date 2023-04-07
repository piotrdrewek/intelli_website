import React from "react";
import { Paper, Typography } from "@mui/material";
import home_background4 from "../img/home_background4.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../../css/homeServices/page6.module.css";

export default function Page6(props) {
  const { t } = useTranslation();
  const [text1Size, setText1Size] = useState(props.isMobile ? "12px" : "25px");
  const [text2Size, setText2Size] = useState(props.isMobile ? "15px" : "30px");
  const [text3Size, setText3Size] = useState(props.isMobile ? "15px" : "30px");

  useEffect(() => {
    setText1Size(props.isMobile ? "12px" : "25px");
    setText2Size(props.isMobile ? "15px" : "30px");
    setText3Size(props.isMobile ? "15px" : "30px");
  }, [props.isMobile]);
  return (
    <Paper
      className={styles.page6Content}
      style={{
        backgroundImage: `url(${home_background4})`,
      }}
    >
      <div className={styles.page6Half}>
        <Typography
          className={styles.page6Text1}
          style={{ fontSize: `${text1Size}` }}
        >
          {t("SKONTAKTUJ SIĘ Z NAMI")}
        </Typography>
        <Typography
          className={styles.page6Text2}
          style={{ fontSize: `${text2Size}` }}
        >
          BIURO@INTELLI.COM.PL
        </Typography>
        <Typography
          className={styles.page6Text3}
          style={{ fontSize: `${text3Size}` }}
        >
          (+48) 607 683 704
        </Typography>
      </div>
    </Paper>
  );
}
