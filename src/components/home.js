import React from "react";
import { Paper, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import home from "./img/home.png";
import industry from "./img/industry.png";
import Footer from "./footer";
import Navbar from "./navbar";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
const fonts = {
  buttonText: "1rem !important",
};
if (isMobile) {
  fonts.buttonText = "2rem !important";
}
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
    // width: "30vh",
    fontWeight: "bold",
    size: "large",
    border: "3px solid !important",
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fonts.buttonText,
    // width: "20vh",
  },
  footer: {
    display: "flex",
    backgroundColor: "white !important",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "bold",
    gridArea: "r-line3 / c-line1 / r-line4 / c-line3",
    minHeight: " 15vh",
    width: "100%",
  },
});

export default function Home(props) {
  const { t } = useTranslation();
  const classes = useStyles();
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
          >
            <Typography className={classes.buttonText}>
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
          >
            <Typography className={classes.buttonText}>
              {t("AUTOMATYKA DOMOWA")}
            </Typography>
          </Button>
        </div>
      </Paper>
      <Navbar />
      <Footer className={classes.footer} />
    </div>
  );
}
