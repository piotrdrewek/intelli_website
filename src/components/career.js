import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography, Button } from "@mui/material";
import about_background2 from "./img/about_background2.png";
import Footer from "./footer";
import Navbar from "./navbar";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
const fonts = {
  header1: "30px !important",
  text1: "18px !important",
  text2: "18px !important",
  ButtonText: "22px !important",
};
if (isMobile) {
  fonts.header1 = "60px !important";
  fonts.text1 = "36px !important";
  fonts.text2 = "36px !important";
  fonts.ButtonText = "44px !important";
}

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
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "bold",
    gridArea: "r-lin2 / c-line1 / r-line3 / c-line3",
    height: " 15vh",
  },
  header1: {
    color: "#FFA033",
    fontSize: fonts.header1,
    letterSpacing: "0.15em",
    textAlign: "left",
    marginTop: "20% !important",
  },
  text1: {
    color: "#4E4E4E",
    fontSize: fonts.text1,
    letterSpacing: "0.15em",
    textAlign: "left",
    marginLeft: "10% !important",
    marginRight: "5% !important",
  },
  text2: {
    color: "#FFCF40",
    fontSize: fonts.text2,
    letterSpacing: "0.15em",
    textAlign: "left",
    marginLeft: "10% !important",
    marginRight: "5% !important",
  },
  ButtonText: {
    color: "#FFFFFF",
    fontSize: fonts.ButtonText,
    letterSpacing: "0.2em",
  },
});

export default function Career(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Paper className={classes.content1}>
        <div
          className={classes.half1}
          style={{ backgroundColor: "white", width: "40%" }}
        >
          <Typography className={classes.header1}>
            {t("PRACUJ Z NAMI")}
          </Typography>
          <Typography className={classes.text1}>
            {t(
              "W związku z ciągłym rozwojem, poszukujemy nowych członków naszego zespołu."
            )}
          </Typography>
          <Typography className={classes.text2}>
            {t("Uważasz, że mógłbyś wnieść swoją wartość do naszej firmy?")}
          </Typography>
          <Button variant="contained" className={classes.button}>
            <a
              href="mailto:biuro@intelli.com.pl"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography className={classes.ButtonText}>
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

      <Navbar />
      <Footer className={classes.footer} />
    </div>
  );
}
