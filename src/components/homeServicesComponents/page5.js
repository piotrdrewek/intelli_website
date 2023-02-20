import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import home_background3 from "../img/home_background3.png";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  content5: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line6 / c-line1 / r-line7 / c-line3",
    background: "rgba(128, 128, 128, 0) !important",
    height: "100vh",
  },
  half5: {
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

export default function Page5(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  return (
    <Paper className={classes.content5}>
      <div
        className={classes.half5}
        style={{ backgroundImage: `url(${home_background3})` }}
      ></div>
      <div
        className={classes.half5}
        style={{
          backgroundColor: "white",
        }}
      >
        <Typography
          style={{
            color: "#FFA033",
            fontSize: "54px",
            letterSpacing: "0.15em",
            marginLeft: "10%",
            textAlign: "left",
          }}
        >
          {t("Aplikacja użykownika")}
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
            "Wygodne sterowanie i monitorowanie funkcji budynku za pomocą jednej aplikacji na smartphone, tablet lub komputer, w każdym miejscu na świecie."
          )}
        </Typography>
      </div>
    </Paper>
  );
}
