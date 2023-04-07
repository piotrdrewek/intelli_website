import React from "react";
import { Paper, Typography } from "@mui/material";
import industry_background3 from "../img/industry_background3.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../../css/industryServices/page4.module.css";

export default function Page4(props) {
  const { t } = useTranslation();
  const [header1Size, setHeader1Size] = useState(
    props.isMobile ? "10px" : "40px"
  );
  const [textSize, setTextSize] = useState(props.isMobile ? "10px" : "21px");
  useEffect(() => {
    setHeader1Size(props.isMobile ? "10px" : "40px");
    setTextSize(props.isMobile ? "10px" : "21px");
  }, [props.isMobile]);
  return (
    <Paper
      className={styles.page4Content}
      style={{ backgroundImage: `url(${industry_background3})` }}
    >
      <div
        className={styles.page4Half}
        style={{
          width: "100%",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-around",
        }}
      >
        <div className={styles.page4Line}>
          <Typography
            className={styles.page4Header1}
            style={{ fontSize: `${header1Size}` }}
          >
            {t("PRZYGOTOWANIE PLC/HMI")}
          </Typography>
          <Typography
            className={styles.page4Text1}
            style={{ fontSize: `${textSize}` }}
          >
            {t(
              "Bazując na założeniach projektowych oraz opisie funkcjonalnym przygotujemy kompleksowo program PLC sterujący procesem oraz przygotujemy intuicyjną aplikację panelu HMI."
            )}
          </Typography>
        </div>
        <div
          className={styles.page4Line}
          style={{ alignItems: "space-between" }}
        >
          <Typography
            className={styles.page4Header1}
            style={{ fontSize: `${header1Size}` }}
          >
            {t("INTEGRACJA")}
          </Typography>
          <Typography
            className={styles.page4Text1}
            style={{ fontSize: `${textSize}` }}
          >
            {t(
              "Nasi doświadczeni programiści zajmą się kompleksowo integracją oraz uruchomieniem dostarczonego systemu."
            )}
          </Typography>
        </div>
        <div className={styles.page4Line}>
          <Typography
            className={styles.page4Header1}
            style={{ fontSize: `${header1Size}` }}
          >
            {t("SZKOLENIE")}
          </Typography>
          <Typography
            className={styles.page4Text1}
            style={{ fontSize: `${textSize}` }}
          >
            {t(
              "Po uruchomieniu systemu zadbamy o to, aby obsługa była przygotowana na pracę z nim oraz wiedziała jakie czynności należy przeprowadzać okresowo, aby zapewnić jego bezawaryjną pracę."
            )}
          </Typography>
        </div>
        <div className={styles.page4Line}>
          <Typography
            className={styles.page4Header1}
            style={{ fontSize: `${header1Size}` }}
          >
            {t("SERWIS")}
          </Typography>
          <Typography
            className={styles.page4Text1}
            style={{ fontSize: `${textSize}` }}
          >
            {t(
              "Nasz dział serwisowy zadba o wsparcie obsługi w przypadku wystąpienia takiej konieczności. Oferujemy obsługę w języku polskim, angielskim, niemieckim oraz francuskim."
            )}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
