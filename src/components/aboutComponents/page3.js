import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography, Button } from "@mui/material";
import about_background2 from "../img/about_background2.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../../css/about/page3.module.css";

export default function Page3(props) {
  const { t } = useTranslation();
  const [header1Size, setHeader1Size] = useState(
    props.isMobile ? "15px" : "30px"
  );
  const [text1Size, setText1Size] = useState(props.isMobile ? "9px" : "18px");
  const [buttonTextSize, setButtonTextSize] = useState(
    props.isMobile ? "11px" : "22px"
  );
  const [contactTextSize, setContactTextSize] = useState(
    props.isMobile ? "15px" : "30px"
  );
  useEffect(() => {
    setHeader1Size(props.isMobile ? "15px" : "30px");
    setText1Size(props.isMobile ? "9px" : "18px");
    setButtonTextSize(props.isMobile ? "11px" : "22px");
    setContactTextSize(props.isMobile ? "15px" : "30px");
  }, [props.isMobile]);
  return (
    <Paper className={styles.page3Content1}>
      <div
        className={styles.page3Half}
        style={{ backgroundColor: "white", width: "40%" }}
      >
        <Typography
          className={styles.page3Header1}
          style={{ fontSize: `${header1Size}` }}
        >
          {t("PRACUJ Z NAMI")}
        </Typography>
        <Typography
          className={styles.page3Text1}
          style={{ fontSize: `${text1Size}` }}
        >
          {t(
            "W związku z ciągłym rozwojem, poszukujemy nowych członków naszego zespołu."
          )}
        </Typography>
        <Typography
          className={styles.page3Text2}
          style={{ fontSize: `${text1Size}` }}
        >
          {t("Uważasz, że mógłbyś wnieść swoją wartość do naszej firmy?")}
        </Typography>
        <Button variant="contained" className={styles.page3Button}>
          <a
            href="mailto:biuro@intelli.com.pl"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography
              className={styles.page3ButtonText}
              style={{ fontSize: `${buttonTextSize}` }}
            >
              {t("APLIKUJ")}
            </Typography>
          </a>
        </Button>
      </div>
      <div
        className={styles.page3Half}
        style={{ backgroundImage: `url(${about_background2})`, width: "60%" }}
      ></div>
      <Paper className={styles.page3Content2}>
        <Typography
          className={styles.page3ContactText}
          style={{ fontSize: `${contactTextSize}` }}
        >
          BIURO@INTELLI.COM.PL
        </Typography>

        <Typography
          className={styles.page3ContactText}
          style={{ fontSize: `${contactTextSize}` }}
        >
          (+48) 607 683 704
        </Typography>
      </Paper>
    </Paper>
  );
}
