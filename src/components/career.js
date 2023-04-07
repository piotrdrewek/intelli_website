import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography, Button } from "@mui/material";
import about_background2 from "./img/about_background2.png";
import Footer from "./footer";
import Navbar from "./navbar";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../css/career.module.css";
import commonStyles from "../css/common.module.css";

export default function Career(props) {
  const { t } = useTranslation();
  const [header1Size, setHeader1Size] = useState(
    props.isMobile ? "15px" : "30px"
  );
  const [header1MarginTop, setHeader1MarginTop] = useState(
    props.isMobile ? "40%" : "20%"
  );
  const [text1Size, setText1Size] = useState(props.isMobile ? "15px" : "30px");
  const [text2Size, setText2Size] = useState(props.isMobile ? "15px" : "30px");
  const [buttonTextSize, setButtonTextSize] = useState(
    props.isMobile ? "11px" : "22px"
  );

  useEffect(() => {
    setHeader1Size(props.isMobile ? "15px" : "30px");
    setHeader1MarginTop(props.isMobile ? "40%" : "20%");
    setText1Size(props.isMobile ? "9px" : "18px");
    setText2Size(props.isMobile ? "9px" : "18px");
    setButtonTextSize(props.isMobile ? "11px" : "22px");
  }, [props.isMobile]);

  return (
    <div className={commonStyles.onePageApp}>
      <Paper className={styles.careerContent}>
        <div
          className={styles.careerhalf}
          style={{ backgroundColor: "white", width: "40%" }}
        >
          <Typography
            className={styles.careerHeader}
            style={{
              fontSize: `${header1Size}`,
              marginTop: `${header1MarginTop}`,
            }}
          >
            {t("PRACUJ Z NAMI")}
          </Typography>
          <Typography
            className={styles.careerText1}
            style={{ fontSize: `${text1Size}` }}
          >
            {t(
              "W związku z ciągłym rozwojem, poszukujemy nowych członków naszego zespołu."
            )}
          </Typography>
          <Typography
            className={styles.careerText2}
            style={{ fontSize: `${text2Size}` }}
          >
            {t("Uważasz, że mógłbyś wnieść swoją wartość do naszej firmy?")}
          </Typography>
          <Button variant="contained" className={styles.careerButton}>
            <a
              href="mailto:biuro@intelli.com.pl"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                className={styles.careerButtonText}
                style={{ fontSize: `${buttonTextSize}` }}
              >
                {t("APLIKUJ")}
              </Typography>
            </a>
          </Button>
        </div>
        <div
          className={styles.careerhalf}
          style={{ backgroundImage: `url(${about_background2})`, width: "60%" }}
        ></div>
      </Paper>

      <Navbar isMobile={props.isMobile} />
      <Footer
        className={commonStyles.onePageFooter}
        isMobile={props.isMobile}
      />
    </div>
  );
}
