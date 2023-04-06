import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import home_background4 from "../img/home_background4.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles({
  content6: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    gridArea: "r-line7 / c-line1 / r-line8 / c-line3",
    backgroundColor: "#cccccc !important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    height: "85vh",
  },

  half6: {
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#FFCF40",
    letterSpacing: "0.15em",
  },
  text2: {
    color: "#000000",
    letterSpacing: "0.25em",
    marginTop: "10%",
    marginBottom: "5%",
  },
  text3: {
    color: "#000000",
    letterSpacing: "0.15em",
  },
});

export default function Page6(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [text1Size, setText1Size] = useState(props.isMobile ? "12px" : "25px");
  const [text2Size, setText2Size] = useState(props.isMobile ? "15px" : "30px");
  const [text3Size, setText3Size] = useState(props.isMobile ? "15px" : "30px");

  useEffect(() => {
    setText1Size(props.isMobile ? "12px" : "25px");
    setText2Size(props.isMobile ? "15px" : "30px");
    setText3Size(props.isMobile ? "15px" : "30px");
  }, [props.isMobile]);
  return (
    <Paper
      className={classes.content6}
      style={{
        backgroundImage: `url(${home_background4})`,
      }}
    >
      {/* <div className={classes.half6} style={{ width: "60%" }}></div> */}
      <div className={classes.half6}>
        <Typography
          className={classes.text1}
          style={{ fontSize: `${text1Size}` }}
        >
          {t("SKONTAKTUJ SIĘ Z NAMI")}
        </Typography>
        <Typography
          className={classes.text2}
          style={{ fontSize: `${text2Size}` }}
        >
          BIURO@INTELLI.COM.PL
        </Typography>
        <Typography
          className={classes.text3}
          style={{ fontSize: `${text3Size}` }}
        >
          (+48) 607 683 704
        </Typography>
      </div>
    </Paper>
  );
}
