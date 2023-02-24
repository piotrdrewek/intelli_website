import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography } from "@mui/material";
import about_background1 from "../img/about_background1.png";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
const fonts = {
  half1Width: "50%",
  header1: "16px !important",
  header2: "54px !important",
};
if (isMobile) {
  fonts.header1 = "30px !important";
  fonts.header2 = "100px !important";
  fonts.half1Width = "100%";
}

const useStyles = makeStyles({
  content1: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    gridArea: "r-line1 / c-line1 / r-line3 / c-line3",
    height: "100vh",
    backgroundColor: "#cccccc !important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  },
  half1: {
    height: "100vh",
    width: fonts.half1Width,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  },
  header1: {
    color: "#FFA033",
    fontSize: fonts.header1,
    letterSpacing: "0.3em",
    marginLeft: "10% !important",
  },
  header2: {
    color: "#FFA033",
    fontSize: fonts.header2,
    letterSpacing: "0.15em",
    marginLeft: "10% !important",
  },
});

export default function Page1(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Paper
      className={classes.content1}
      style={{ backgroundImage: `url(${about_background1})` }}
    >
      {/* <div className={classes.half1}></div> */}
      <div className={classes.half1}>
        <Typography className={classes.header1}>{t("O NAS")}</Typography>
        <Typography className={classes.header2}>
          {t("Z prawdziwej pasji")}
        </Typography>
        <Typography
          style={{
            color: "#484848",
            fontSize: "24px",
            letterSpacing: "0.05em",
            marginTop: "5%",
            marginBottom: "5%",
            marginLeft: "10%",
            marginRight: "10%",
            textAlign: "left",
          }}
        >
          {t(
            "Intelli Jest wynikiem prawdziwej pasji do automatyki. Projekt rozpoczęty przez zespół pasjonatów i doświadczonych specjalistów. Skupiamy się na dostarczaniu najlepszych rozwiązań z zakresu automatyki przemysłowej i domowej."
          )}
        </Typography>
      </div>
    </Paper>
  );
}
