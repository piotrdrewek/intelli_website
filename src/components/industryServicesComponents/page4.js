import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import industry_background3 from "../img/industry_background3.png";

const useStyles = makeStyles({
  content4: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line5 / c-line1 / r-line6 / c-line3",
    height: "100vh",
    backgroundColor: "#212121!important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  },
  half4: {
    height: "100vh",
    width: "50%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  line1: {
    display: "flex",
    flexDirection: "row",
  },
});

export default function Page4(props) {
  const classes = useStyles();
  return (
    <Paper
      className={classes.content4}
      style={{ backgroundImage: `url(${industry_background3})` }}
    >
      <div
        className={classes.half4}
        style={{
          width: "100%",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-around",
        }}
      >
        <div className={classes.line1}>
          <Typography
            style={{
              color: "#FFCF40",
              fontSize: "40px",
              letterSpacing: "0.15em",
              marginLeft: "10%",
              marginRight: "10%",
              textAlign: "left",
              width: "40%",
            }}
          >
            PRZYGOTOWANIE PLC/HMI
          </Typography>
          <Typography
            style={{
              color: "#FFFFFF",
              fontSize: "21px",
              letterSpacing: "0.1em",
              marginRight: "5%",
              textAlign: "left",
              width: "60%",
            }}
          >
            Bazując na założeniach projektowych oraz opisie funkcjonalnym
            przygotujemy kompleksowo program PLC sterujący procesem oraz
            przygotujemy intuicyjną aplikację panelu HMI.
          </Typography>
        </div>
        <div className={classes.line1}>
          <Typography
            style={{
              color: "#FFCF40",
              fontSize: "40px",
              letterSpacing: "0.15em",
              marginLeft: "10%",
              marginRight: "10%",
              textAlign: "left",
              width: "40%",
            }}
          >
            INTEGRACJA
          </Typography>
          <Typography
            style={{
              color: "#FFFFFF",
              fontSize: "21px",
              letterSpacing: "0.1em",
              marginRight: "5%",
              textAlign: "left",
              width: "60%",
            }}
          >
            Nasi doświadczeni programiści zajmą się kompleksowo integracją oraz
            uruchomieniem dostarczonego systemu.
          </Typography>
        </div>
        <div className={classes.line1}>
          <Typography
            style={{
              color: "#FFCF40",
              fontSize: "40px",
              letterSpacing: "0.15em",
              marginLeft: "10%",
              marginRight: "10%",
              textAlign: "left",
              width: "40%",
            }}
          >
            SZKOLENIE
          </Typography>
          <Typography
            style={{
              color: "#FFFFFF",
              fontSize: "21px",
              letterSpacing: "0.1em",
              marginRight: "5%",
              width: "60%",
              textAlign: "left",
            }}
          >
            Po uruchomieniu systemu zadbamy o to, aby obsługa była przygotowana
            na pracę z nim oraz wiedziała jakie czynności należy przeprowadzać
            okresowo, aby zapewnić jego bezawaryjną pracę.
          </Typography>
        </div>
        <div className={classes.line1}>
          <Typography
            style={{
              color: "#FFCF40",
              fontSize: "40px",
              letterSpacing: "0.15em",
              marginLeft: "10%",
              marginRight: "10%",
              textAlign: "left",
              width: "40%",
            }}
          >
            SERWIS
          </Typography>
          <Typography
            style={{
              color: "#FFFFFF",
              fontSize: "21px",
              letterSpacing: "0.1em",
              marginRight: "5%",
              width: "60%",
              textAlign: "left",
            }}
          >
            Nasz dział serwisowy zadba o wsparcie obsługi w przypadku
            wystąpienia takiej konieczności. Oferujemy obsługę w języku polskim,
            angielskim, niemieckim oraz francuskim.
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
