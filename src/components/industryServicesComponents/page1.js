import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import industry_background1 from "../img/industry_background1.png";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
const fonts = {
  header1: "16px !important",
  header2: "54px !important",
  text1: "24px !important",
};
if (isMobile) {
  fonts.header1 = "32px !important";
  fonts.header2 = "80px !important";
  fonts.text1 = "48px !important";
}

const useStyles = makeStyles({
  content1: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line1 / c-line1 / r-line3 / c-line3",
    background: "rgba(128, 128, 128, 0) !important",
    height: "100vh",
  },
  half1: {
    backgroundColor: "#cccccc",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
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
  text1: {
    color: "#484848",
    fontSize: fonts.text1,
    letterSpacing: "0.05em",
    marginTop: "5% !important",
    marginBottom: "5% !important",
    marginLeft: "10% !important",
    marginRight: "10% !important",
    textAlign: "left",
  },
});

export default function Page1(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Paper className={classes.content1}>
      <div
        className={classes.half1}
        style={{
          backgroundColor: "white",
        }}
      >
        <Typography className={classes.header1}>{t("POZNAJ NAS")}</Typography>
        <Typography className={classes.header2}>{t("Nasze usługi")}</Typography>
        <Typography className={classes.text1}>
          {t(
            "Kompleksowa realizacja systemów automatyki przemysłowej. Projektowanie, prefabrykacja szaf sterowniczych, montaż oraz uruchomienie.Naszą specjalizacją są systemy transportu zarówno ciężkiego jak i lekkiego."
          )}{" "}
        </Typography>
      </div>
      <div
        className={classes.half1}
        style={{ backgroundImage: `url(${industry_background1})` }}
      ></div>
    </Paper>
  );
}
