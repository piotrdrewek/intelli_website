import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography, Button } from "@mui/material";
import about_background2 from "./img/about_background2.png";
import Footer from "./footer";
import Navbar from "./navbar";
import { useTranslation } from "react-i18next";
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
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line1 / c-line1 / r-line3 / c-line3",
    height: "85vh",
    backgroundColor: "#cccccc !important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  },

  half1: {
    backgroundColor: "#cccccc",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    height: "100%",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
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
  header1: {
    color: "#FFA033",
    letterSpacing: "0.15em",
    textAlign: "left",
  },
  text1: {
    color: "#4E4E4E",
    letterSpacing: "0.15em",
    textAlign: "left",
    marginLeft: "10% !important",
    marginRight: "5% !important",
  },
  text2: {
    color: "#FFCF40",
    letterSpacing: "0.15em",
    textAlign: "left",
    marginLeft: "10% !important",
    marginRight: "5% !important",
  },
  ButtonText: {
    color: "#FFFFFF",
    letterSpacing: "0.2em",
  },
});

export default function Career(props) {
  const { t } = useTranslation();
  const classes = useStyles();
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
    <div className={classes.app}>
      <Paper className={classes.content1}>
        <div
          className={classes.half1}
          style={{ backgroundColor: "white", width: "40%" }}
        >
          <Typography
            className={classes.header1}
            style={{
              fontSize: `${header1Size}`,
              marginTop: `${header1MarginTop}`,
            }}
          >
            {t("PRACUJ Z NAMI")}
          </Typography>
          <Typography
            className={classes.text1}
            style={{ fontSize: `${text1Size}` }}
          >
            {t(
              "W związku z ciągłym rozwojem, poszukujemy nowych członków naszego zespołu."
            )}
          </Typography>
          <Typography
            className={classes.text2}
            style={{ fontSize: `${text2Size}` }}
          >
            {t("Uważasz, że mógłbyś wnieść swoją wartość do naszej firmy?")}
          </Typography>
          <Button variant="contained" className={classes.button}>
            <a
              href="mailto:biuro@intelli.com.pl"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                className={classes.ButtonText}
                style={{ fontSize: `${buttonTextSize}` }}
              >
                {t("APLIKUJ")}
              </Typography>
            </a>
          </Button>
        </div>
        <div
          className={classes.half1}
          style={{ backgroundImage: `url(${about_background2})`, width: "60%" }}
        ></div>
      </Paper>

      <Navbar isMobile={props.isMobile} />
      <Footer className={classes.footer} isMobile={props.isMobile} />
    </div>
  );
}
