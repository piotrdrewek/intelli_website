import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography, Button } from "@mui/material";
import home_background4 from "./img/home_background4.png";
import { useTranslation } from "react-i18next";

import Footer from "./footer";
import Navbar from "./navbar";

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
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "bold",
    gridArea: "r-lin2 / c-line1 / r-line3 / c-line3",
    height: " 15vh",
  },
});

export default function Contact(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Paper
        className={classes.content1}
        style={{
          backgroundImage: `url(${home_background4})`,
        }}
      >
        <div className={classes.half1} style={{ width: "60%" }}></div>
        <div className={classes.half1} style={{ width: "40%" }}>
          <Typography
            style={{
              color: "#FFCF40",
              fontSize: "25px",
              letterSpacing: "0.15em",
            }}
          >
            {t("SKONTAKTUJ SIĘ Z NAMI")}
          </Typography>
          <Typography
            style={{
              color: "#000000",
              fontSize: "30px",
              letterSpacing: "0.25em",
              marginTop: "10%",
              marginBottom: "5%",
            }}
          >
            BIURO@INTELLI.COM.PL
          </Typography>
          <Typography
            style={{
              color: "#000000",
              fontSize: "30px",
              letterSpacing: "0.15em",
            }}
          >
            (+48) 607 683 704
          </Typography>
        </div>
      </Paper>
      <Navbar />
      <Footer className={classes.footer} />
    </div>
  );
}
