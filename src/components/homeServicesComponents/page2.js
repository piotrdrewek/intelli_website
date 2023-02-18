import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import home_background2 from "../img/home_background2.png";

const useStyles = makeStyles({
  content2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    gridArea: "r-line3 / c-line1 / r-line4 / c-line3",
    height: "100vh",
    backgroundColor: "#cccccc !important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  },
  half2: {
    height: "100vh",
    width: "50%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default function Page2(props) {
  const classes = useStyles();
  return (
    <Paper
      className={classes.content2}
      style={{ backgroundImage: `url(${home_background2})` }}
    >
      <Typography
        style={{
          color: "#FFA033",
          fontSize: "16px",
          letterSpacing: "0.3em",
          marginLeft: "10%",
          textAlign: "left",
        }}
      >
        NASZE USŁUGI
      </Typography>
      <Typography
        style={{
          color: "#FFA033",
          fontSize: "54px",
          letterSpacing: "0.15em",
          marginLeft: "10%",
          textAlign: "left",
        }}
      >
        Rozwiązania IOT
      </Typography>
      <Typography
        style={{
          color: "#FFFFFF",
          fontSize: "24px",
          letterSpacing: "0.1em",
          width: "40%",
          marginTop: "5%",
          marginBottom: "5%",
          marginLeft: "10%",
          marginRight: "10%",
          textAlign: "left",
        }}
      >
        Integracja urządzeń IOT(systemy audio, smart urządzenia AGD, roboty
        sprzątające, roboty ogrodowe, nawilżacze powietrza, etc.) z pozostałymi
        systemami automatyki w budynku.
      </Typography>
    </Paper>
  );
}
