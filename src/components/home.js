import React from "react";
import { Paper, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import home from "./img/home.png";
import industry from "./img/industry.png";
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

  content: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line1 / c-line1 / r-line3 / c-line3",
    background: "rgba(128, 128, 128, 0) !important",
    height: "85vh",
  },
  half: {
    backgroundColor: "#cccccc",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    height: "100%",
    width: "50%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  button: {
    borderColor: "#FFFFFF !important",
    color: "#FFFFFF !important",
    borderRadius: "30px !important",
    marginBottom: "25% !important",
    fontWeight: "bold",
    size: "large",
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    display: "flex",
    backgroundColor: "white !important",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    fontWeight: "bold",
    gridArea: "r-line3 / c-line1 / r-line4 / c-line3",
    minHeight: "15vh",
    width: "100%",
    flexDirection: "column",
  },
});

export default function Home(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [fontSize, setFontSize] = useState(props.isMobile ? "0.5rem" : "1rem");
  const [buttonBorderSize, setbuttonBorderSize] = useState(
    props.isMobile ? "1.5px solid" : "3px solid"
  );

  useEffect(() => {
    setFontSize(props.isMobile ? "0.5rem" : "1rem");
    setbuttonBorderSize(props.isMobile ? "1.5px solid" : "3px solid");
  }, [props.isMobile]);

  return (
    <div className={classes.app}>
      <Paper className={classes.content}>
        <div
          className={classes.half}
          style={{ backgroundImage: `url(${industry})` }}
        >
          <Button
            variant="outlined"
            component={Link}
            to={"/industryServices"}
            className={classes.button}
            style={{ border: `${buttonBorderSize}` }}
          >
            <Typography
              className={classes.buttonText}
              style={{ fontSize: `${fontSize}` }}
            >
              {t("AUTOMATYKA PRZEMYSŁOWA")}
            </Typography>
          </Button>
        </div>
        <div
          className={classes.half}
          style={{ backgroundImage: `url(${home})` }}
        >
          <Button
            variant="outlined"
            component={Link}
            to={"/homeServices"}
            className={classes.button}
            style={{ border: `${buttonBorderSize}` }}
          >
            <Typography
              className={classes.buttonText}
              style={{ fontSize: `${fontSize}` }}
            >
              {t("AUTOMATYKA DOMOWA")}
            </Typography>
          </Button>
        </div>
      </Paper>
      <Navbar isMobile={props.isMobile} />
      <Footer isMobile={props.isMobile} className={classes.footer} />
    </div>
  );
}
