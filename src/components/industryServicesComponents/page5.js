import React from "react";
import { Paper, Typography } from "@mui/material";
import industry_background4 from "../img/industry_background4.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../../css/industryServices/page5.module.css";

export default function IndustryServices(props) {
  const { t } = useTranslation();
  const [header1Size, setHeader1Size] = useState(
    props.isMobile ? "12px" : "25px"
  );
  const [text1Size, setText1Size] = useState(props.isMobile ? "15px" : "30px");
  const [text2Size, setText2Size] = useState(props.isMobile ? "15px" : "30px");
  const [half1Width, setHalf1Width] = useState(props.isMobile ? "40%" : "60%");
  const [half2Width, setHalf2Width] = useState(props.isMobile ? "60%" : "40%");

  useEffect(() => {
    setHeader1Size(props.isMobile ? "20px" : "40px");
    setText1Size(props.isMobile ? "10px" : "21px");
    setText2Size(props.isMobile ? "10px" : "21px");
    setHalf1Width(props.isMobile ? "40%" : "60%");
    setHalf2Width(props.isMobile ? "60%" : "40%");
  }, [props.isMobile]);
  return (
    <Paper className={styles.page5Content}>
      <div
        className={styles.page5Half}
        style={{
          backgroundImage: `url(${industry_background4})`,
          width: `${half1Width}`,
        }}
      ></div>
      <div
        className={styles.page5Half}
        style={{
          backgroundColor: "#23221E",
          width: `${half2Width}`,
        }}
      >
        <Typography
          className={styles.page5Header1}
          style={{ fontSize: `${header1Size}` }}
        >
          {t("SKONTAKTUJ SIĘ Z NAMI")}
        </Typography>
        <Typography
          className={styles.page5Text1}
          style={{ fontSize: `${text1Size}` }}
        >
          BIURO@INTELLI.COM.PL
        </Typography>
        <Typography
          className={styles.page5Text2}
          style={{ fontSize: `${text2Size}` }}
        >
          (+48) 607 683 704
        </Typography>
      </div>
    </Paper>
  );
}
