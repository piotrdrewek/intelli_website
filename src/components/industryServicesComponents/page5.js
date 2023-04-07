import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import industry_background4 from "../img/industry_background4.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles({
  content5: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line6 / c-line1 / r-line7 / c-line3",
    height: "85vh",
    backgroundColor: "#cccccc!important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  },
  half5: {
    backgroundColor: "#cccccc",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header1: {
    color: "#FFCF40",
    letterSpacing: "0.15em",
  },
  text1: {
    color: "#FFFFFF",
    letterSpacing: "0.25em",
    marginTop: "10% !important",
    marginBottom: "5% !important",
  },
  text2: {
    color: "#FFFFFF",
    letterSpacing: "0.15em",
  },
});

export default function IndustryServices(props) {
  const { t } = useTranslation();
  const classes = useStyles();
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
    <Paper className={classes.content5}>
      <div
        className={classes.half5}
        style={{
          backgroundImage: `url(${industry_background4})`,
          width: `${half1Width}`,
        }}
      ></div>
      <div
        className={classes.half5}
        style={{
          backgroundColor: "#23221E",
          width: `${half2Width}`,
        }}
      >
        <Typography
          className={classes.header1}
          style={{ fontSize: `${header1Size}` }}
        >
          {t("SKONTAKTUJ SIĘ Z NAMI")}
        </Typography>
        <Typography
          className={classes.text1}
          style={{ fontSize: `${text1Size}` }}
        >
          BIURO@INTELLI.COM.PL
        </Typography>
        <Typography
          className={classes.text2}
          style={{ fontSize: `${text2Size}` }}
        >
          (+48) 607 683 704
        </Typography>
      </div>
    </Paper>
  );
}
