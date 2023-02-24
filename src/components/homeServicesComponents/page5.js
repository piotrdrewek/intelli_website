import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import home_background3 from "../img/home_background3.png";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
const fonts = {
  header1: "54px !important",
  text1: "24px !important",
};
if (isMobile) {
  fonts.header1 = "90px !important";
  fonts.text1 = "48px !important";
}

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
  header1: {
    color: "#FFA033",
    fontSize: fonts.header1,
    letterSpacing: "0.15em",
    marginLeft: "10% !important",
    textAlign: "left",
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

export default function Page5(props) {
  const { t } = useTranslation();
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
        <Typography className={classes.header1}>
          {t("Aplikacja użykownika")}
        </Typography>
        <Typography className={classes.text1}>
          {t(
            "Wygodne sterowanie i monitorowanie funkcji budynku za pomocą jednej aplikacji na smartphone, tablet lub komputer, w każdym miejscu na świecie."
          )}
        </Typography>
      </div>
    </Paper>
  );
}
