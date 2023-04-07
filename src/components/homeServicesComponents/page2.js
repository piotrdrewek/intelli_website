import React from "react";
import { Paper, Typography } from "@mui/material";
import home_background2 from "../img/home_background2.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../../css/homeServices/page2.module.css";

export default function Page2(props) {
  const { t } = useTranslation();
  const [header1Size, setHeader1Size] = useState(
    props.isMobile ? "8px" : "16px"
  );
  const [header2Size, setHeader2Size] = useState(
    props.isMobile ? "27px" : "54px"
  );
  const [textSize, setTextSize] = useState(props.isMobile ? "12px" : "24px");
  const [text1MarginBottom, setText1MarginBottom] = useState(
    props.isMobile ? "20%" : "5%"
  );
  const [text1Width, setText1Width] = useState(props.isMobile ? "auto" : "40%");

  useEffect(() => {
    setHeader1Size(props.isMobile ? "8px" : "16px");
    setHeader2Size(props.isMobile ? "27px" : "54px");
    setTextSize(props.isMobile ? "12px" : "24px");
    setText1MarginBottom(props.isMobile ? "20%" : "5%");
    setText1Width(props.isMobile ? "auto" : "40%");
  }, [props.isMobile]);

  return (
    <Paper
      className={styles.page2Content}
      style={{ backgroundImage: `url(${home_background2})` }}
    >
      <Typography
        className={styles.page2Header1}
        style={{ fontSize: `${header1Size}` }}
      >
        {t("NASZE USŁUGI")}
      </Typography>
      <Typography
        className={styles.page2Header2}
        style={{ fontSize: `${header2Size}` }}
      >
        {t("Rozwiązania IOT")}
      </Typography>
      <Typography
        className={styles.page2Text1}
        style={{
          fontSize: `${textSize}`,
          width: `${text1Width}`,
          marginBottom: `${text1MarginBottom}`,
        }}
      >
        {t(
          "Integracja urządzeń IOT(systemy audio, smart urządzenia AGD, roboty sprzątające, roboty ogrodowe, nawilżacze powietrza, etc.) z pozostałymi systemami automatyki w budynku."
        )}
      </Typography>
    </Paper>
  );
}
