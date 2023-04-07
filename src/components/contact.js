import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography } from "@mui/material";
import home_background4 from "./img/home_background4.png";
import { useTranslation } from "react-i18next";
import Footer from "./footer";
import Navbar from "./navbar";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles({
  app: {
    display: "grid",
    gridTemplateColumns: "[c-line1] 50% [c-line2] 50% [c-line3]",
    gridTemplateRows: "[r-line1] 25% [r-line2] 60% [r-line3] 15% [r-line4]",
    background: "rgba(128, 128, 128, 0) !important",
    textAlign: "center",
  },
  content1: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    gridArea: "r-line1 / c-line1 / r-line3 / c-line3",
    height: "85vh",
    backgroundColor: "#cccccc !important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  },

  half1: {
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    borderRadius: "30px !important",
    borderColor: "#FFA033 !important",
    background: "#FFA033 !important",
    marginBottom: "20% !important",
  },

  footer: {
    display: "flex",
    backgroundColor: "#white !important",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    fontWeight: "bold",
    gridArea: "r-lin2 / c-line1 / r-line3 / c-line3",
    minHeight: " 15vh",
    width: "100%",
    flexDirection: "column",
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

export default function Contact(props) {
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
    <div className={classes.app}>
      <Paper
        className={classes.content1}
        style={{
          backgroundImage: `url(${home_background4})`,
        }}
      >
        <div className={classes.half1}>
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
      <Navbar isMobile={props.isMobile} />
      <Footer className={classes.footer} isMobile={props.isMobile} />
    </div>
  );
}
