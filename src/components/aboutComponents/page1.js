import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography } from "@mui/material";
import about_background1 from "../img/about_background1.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../../css/about/page1.module.css";

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
    <Paper
      className={styles.page1Content}
      style={{ backgroundImage: `url(${about_background1})` }}
    >
      {/* <div className={styles.half1}></div> */}
      <div className={styles.page1Half}>
        <Typography
          className={styles.page1Header1}
          style={{ fontSize: `${header1Size}` }}
        >
          {t("O NAS")}
        </Typography>
        <Typography
          className={styles.page1Header2}
          style={{ fontSize: `${header2Size}` }}
        >
          {t("Z prawdziwej pasji")}
        </Typography>
        <Typography
          style={{
            color: "#484848",
            fontSize: `${textSize}`,
            letterSpacing: "0.05em",
            marginTop: "5%",
            marginBottom: "5%",
            marginLeft: "10%",
            marginRight: "10%",
            textAlign: "left",
          }}
        >
          {t(
            "Intelli Jest wynikiem prawdziwej pasji do automatyki. Projekt rozpoczęty przez zespół pasjonatów i doświadczonych specjalistów. Skupiamy się na dostarczaniu najlepszych rozwiązań z zakresu automatyki przemysłowej i domowej."
          )}
        </Typography>
      </div>
    </Paper>
  );
}
