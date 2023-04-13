import React from "react";
import { Paper, Typography } from "@mui/material";
import home_background1 from "../img/home_background1.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../../css/homeServices/page1.module.css";

export default function Page1(props) {
  const { t } = useTranslation();
  const [header1Size, setHeader1Size] = useState(
    props.isMobile ? "8px" : "16px"
  );
  const [header2Size, setHeader2Size] = useState(
    props.isMobile ? "20px" : "54px"
  );
  const [textSize, setTextSize] = useState(props.isMobile ? "12px" : "24px");
  useEffect(() => {
    setHeader1Size(props.isMobile ? "8px" : "16px");
    setHeader2Size(props.isMobile ? "20px" : "54px");
    setTextSize(props.isMobile ? "12px" : "24px");
  }, [props.isMobile]);
  return (
    <Paper className={styles.page1Content}>
      <div
        className={styles.page1Half}
        style={{
          backgroundColor: "white",
        }}
      >
        <div className={styles.page1Left}>
          <Typography
            className={styles.page1Header1}
            style={{ fontSize: `${header1Size}` }}
          >
            {t("POZNAJ NAS")}
          </Typography>
          <Typography
            className={styles.page1Header2}
            style={{ fontSize: `${header2Size}` }}
          >
            {t("Nasze usługi")}
          </Typography>
          <div className={styles.page1HorizontalLine}></div>
          <Typography
            className={styles.page1Text1}
            style={{ fontSize: `${textSize}` }}
          >
            {t(
              "Instalacja, uruchomienie i serwis kompleksowych rozwiązań automatyki dla budynków mieszkalnych, biurowych, użytku publicznego i hoteli."
            )}
          </Typography>
        </div>

        <div className={styles.page1VerticalLine}></div>
      </div>
      <div
        className={styles.page1Half}
        style={{ backgroundImage: `url(${home_background1})` }}
      ></div>
    </Paper>
  );
}
