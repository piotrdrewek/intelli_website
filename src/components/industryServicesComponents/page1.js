import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import industry_background1 from "../img/industry_background1.png";
import { useTranslation } from "react-i18next";

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
});

export default function Page1(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  return (
    <Paper className={classes.content1}>
      <div
        className={classes.half1}
        style={{
          backgroundColor: "white",
        }}
      >
        <Typography
          style={{
            color: "#FFA033",
            fontSize: "16px",
            letterSpacing: "0.3em",
            marginLeft: "10%",
          }}
        >
          {t("POZNAJ NAS")}
        </Typography>
        <Typography
          style={{
            color: "#FFA033",
            fontSize: "54px",
            letterSpacing: "0.15em",
            marginLeft: "10%",
          }}
        >
          {t("Nasze usługi")}
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
