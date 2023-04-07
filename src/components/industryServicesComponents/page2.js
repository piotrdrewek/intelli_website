import React from "react";
import { Paper, Typography } from "@mui/material";
import industry_background2 from "../img/industry_background2.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../../css/industryServices/page2.module.css";

export default function Page2(props) {
  const { t } = useTranslation();
  const [header1Size, setHeader1Size] = useState(
    props.isMobile ? "8px" : "16px"
  );
  const [header2Size, setHeader2Size] = useState(
    props.isMobile ? "27px" : "54px"
  );
  const [textSize, setTextSize] = useState(props.isMobile ? "12px" : "24px");
  const [textMarginBottom, setTextMarginBottom] = useState(
    props.isMobile ? "20%" : "5%"
  );
  useEffect(() => {
    setHeader1Size(props.isMobile ? "8px" : "16px");
    setHeader2Size(props.isMobile ? "27px" : "54px");
    setTextSize(props.isMobile ? "12px" : "24px");
    setTextMarginBottom(props.isMobile ? "20%" : "5%");
  }, [props.isMobile]);
  return (
    <Paper
      className={styles.page2Content}
      style={{ backgroundImage: `url(${industry_background2})` }}
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
        {t("Nadzory inwestorskie")}
      </Typography>
      <Typography
        className={styles.page2Text1}
        style={{ fontSize: `${textSize}`, marginBottom: `${textMarginBottom}` }}
      >
        {t(
          "Nasi specjaliści pomogą Państwu w kompleksowym procesie analizy założeń projektowych, ofert wykonawczych. Dodatkowo wykonamy dla Państwa audyt funkcjonalny oraz walidację bezpieczeństwa przez specjalistę z certyfikatem CMSE®."
        )}
      </Typography>
    </Paper>
  );
}
