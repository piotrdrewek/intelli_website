import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import industry_background2 from "../img/industry_background2.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles({
  content2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    gridArea: "r-line3 / c-line1 / r-line4 / c-line3",
    height: "100vh",
    backgroundColor: "#cccccc !important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  },
  half2: {
    height: "100vh",
    width: "50%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  header1: {
    color: "#FFA033",
    letterSpacing: "0.3em",
    marginLeft: "10% !important",
    textAlign: "left",
  },
  header2: {
    color: "#FFA033",
    letterSpacing: "0.15em",
    marginLeft: "10% !important",
    textAlign: "left",
  },
  text1: {
    color: "#FFFFFF",
    letterSpacing: "0.1em",
    width: "40%",
    marginTop: "5% !important",

    marginLeft: "10% !important",
    marginRight: "10% !important",
    textAlign: "left",
  },
});

export default function Page2(props) {
  const { t } = useTranslation();
  const classes = useStyles();
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
      className={classes.content2}
      style={{ backgroundImage: `url(${industry_background2})` }}
    >
      <Typography
        className={classes.header1}
        style={{ fontSize: `${header1Size}` }}
      >
        {t("NASZE USŁUGI")}
      </Typography>
      <Typography
        className={classes.header2}
        style={{ fontSize: `${header2Size}` }}
      >
        {t("Nadzory inwestorskie")}
      </Typography>
      <Typography
        className={classes.text1}
        style={{ fontSize: `${textSize}`, marginBottom: `${textMarginBottom}` }}
      >
        {t(
          "Nasi specjaliści pomogą Państwu w kompleksowym procesie analizy założeń projektowych, ofert wykonawczych. Dodatkowo wykonamy dla Państwa audyt funkcjonalny oraz walidację bezpieczeństwa przez specjalistę z certyfikatem CMSE®."
        )}
      </Typography>
    </Paper>
  );
}
