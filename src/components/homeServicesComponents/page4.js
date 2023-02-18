import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import home_system4 from "../img/home_system4.png";
import home_system5 from "../img/home_system5.png";
import home_system6 from "../img/home_system6.png";

const useStyles = makeStyles({
  content4: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line5 / c-line1 / r-line6 / c-line3",
    background: "rgba(128, 128, 128, 0) !important",
    height: "100vh",
  },
  half4: {
    height: "75%",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: "20%",
    gap: "5%",
  },
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "flex-start",
    width: "288px",
  },
});

export default function Page4(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.content4}>
      <Typography
        style={{
          color: "#FFA033",
          fontSize: "54px",
          letterSpacing: "0.1em",
          marginRight: "75px",
          marginTop: "75px",
          textAlign: "right",
          width: "100%",
        }}
      >
        Systemy
      </Typography>

      <div className={classes.half4} style={{ backgroundColor: "white" }}>
        <div className={classes.div} style={{ width: "300px" }}>
          <Typography
            style={{
              color: "#FFA033",
              fontSize: "28px",
              letterSpacing: "0.15em",
              marginLeft: "1%",
            }}
          >
            MONITORUJĄCE I OPTYMALIZUJĄCE
          </Typography>
          <Box
            component="img"
            sx={{
              height: "323px",
              width: "288px",
              marginTop: "10%",
              marginBottom: "10%",
            }}
            alt="Your logo."
            src={home_system4}
          />
          <Typography
            style={{
              color: "#000000",
              fontSize: "14px",
              letterSpacing: "0.05em",
              textAlign: "left",
              marginLeft: "5%",
            }}
          >
            Kontrola zużytych mediów, optymalizacja zużycia za pomocą
            automatyzacji z użyciem czujników obecności i harmonogramów.
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography
            style={{
              color: "#FFA033",
              fontSize: "28px",
              letterSpacing: "0.15em",
            }}
          >
            STEROWANIA ROLETAMI
          </Typography>
          <Box
            component="img"
            sx={{
              height: "323px",
              width: "288px",
              marginTop: "10%",
              marginBottom: "10%",
            }}
            alt="Your logo."
            src={home_system5}
          />
          <Typography
            style={{
              color: "#000000",
              fontSize: "14px",
              letterSpacing: "0.05em",
              textAlign: "left",
            }}
          >
            Automatyzacja otwierania i zamykania rolet z użyciem harmonogramów i
            stacji pogodowej. Programowanie scen nastrojowych.
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography
            style={{
              color: "#FFA033",
              fontSize: "28px",
              letterSpacing: "0.15em",
            }}
          >
            STEROWANIA OŚWIETLENIEM
          </Typography>
          <Box
            component="img"
            sx={{
              height: "323px",
              width: "288px",
              marginTop: "10%",
              marginBottom: "10%",
            }}
            alt="Your logo."
            src={home_system6}
          />
          <Typography
            style={{
              color: "#000000",
              fontSize: "14px",
              letterSpacing: "0.05em",
              textAlign: "left",
            }}
          >
            Automatyzacja oświetlenia za pomocą sensorów ruchu, natężenia
            światła i harmonogramów. Programowanie scen nastrojowych.
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
