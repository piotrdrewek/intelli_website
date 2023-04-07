import React from "react";
import { Paper, Typography } from "@mui/material";
import home_background3 from "../img/home_background3.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../../css/homeServices/page5.module.css";

export default function Page5(props) {
  const { t } = useTranslation();
  const [header1Size, setHeader1Size] = useState(
    props.isMobile ? "22px" : "54px"
  );
  const [textSize, setTextSize] = useState(props.isMobile ? "12px" : "24px");
  useEffect(() => {
    setHeader1Size(props.isMobile ? "22px" : "54px");
    setTextSize(props.isMobile ? "12px" : "24px");
  }, [props.isMobile]);
  return (
    <Paper className={styles.page5Content}>
      <div
        className={styles.page5Half}
        style={{ backgroundImage: `url(${home_background3})` }}
      ></div>
      <div
        className={styles.page5Half}
        style={{
          backgroundColor: "white",
        }}
      >
        <Typography
          className={styles.page5Header1}
          style={{ fontSize: `${header1Size}` }}
        >
          {t("Aplikacja użykownika")}
        </Typography>
        <Typography
          className={styles.page5Text1}
          style={{ fontSize: `${textSize}` }}
        >
          {t(
            "Wygodne sterowanie i monitorowanie funkcji budynku za pomocą jednej aplikacji na smartphone, tablet lub komputer, w każdym miejscu na świecie."
          )}
        </Typography>
      </div>
    </Paper>
  );
}
