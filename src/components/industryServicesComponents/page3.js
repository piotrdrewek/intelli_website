import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  app: {
    display: "grid",
    gridTemplateColumns: "[c-line1] 50% [c-line2] 50% [c-line3]",
    gridTemplateRows:
      "[r-line1] 25vh [r-line2] 75vh [r-line3] 100vh [r-line4] 100vh [r-line5] 100vh [r-line6] 85vh [r-line7] 15vh [r-line8]",
    background: "rgba(128, 128, 128, 0) !important",
    textAlign: "center",
  },

  content1: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line1 / c-line1 / r-line3 / c-line3",
    background: "rgba(128, 128, 128, 0) !important",
    height: "100vh",
  },
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
  content3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line4 / c-line1 / r-line5 / c-line3",
    background: "rgba(128, 128, 128, 0) !important",
    height: "100vh",
  },
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
  content5: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line6 / c-line1 / r-line7 / c-line3",
    height: "85vh",
    backgroundColor: "#cccccc!important",
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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  half2: {
    height: "100vh",
    width: "50%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  half3: {
    backgroundColor: "#cccccc",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    height: "100vh",
    width: "50%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  half4: {
    height: "100vh",
    width: "50%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  half5: {
    backgroundColor: "#cccccc",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    height: "85vh",
    // width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  line1: {
    display: "flex",
    flexDirection: "row",
  },
  footer: {
    display: "flex",
    backgroundColor: "white !important",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "bold",
    gridArea: "r-line7 / c-line1 / r-line8 / c-line3",
    minHeight: " 15vh",
    width: "100%",
  },
});

export default function Page3(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.content3} style={{ backgroundColor: "white" }}>
      <div>
        <Typography
          style={{
            color: "#FFA033",
            fontSize: "36px",
            letterSpacing: "0.15em",
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: "5%",
            textAlign: "left",
          }}
        >
          KONCEPCJA
        </Typography>
        <Typography
          style={{
            color: "#000000",
            fontSize: "24px",
            letterSpacing: "0.1em",
            marginLeft: "10%",
            marginRight: "10%",
          }}
        >
          Doradztwo w zakresie określenia potrzeb klienta dotyczących możliwości
          optymalizacji procesów poprzez dobranie odpowiedniego typu systemu
          automatycznego
        </Typography>
      </div>
      <div>
        <Typography
          style={{
            color: "#FFA033",
            fontSize: "36px",
            letterSpacing: "0.15em",
            marginLeft: "10%",
            marginRight: "10%",
            textAlign: "right",
          }}
        >
          PROJEKT
        </Typography>
        <Typography
          style={{
            color: "#000000",
            fontSize: "24px",
            letterSpacing: "0.1em",
            marginLeft: "10%",
            marginRight: "10%",
          }}
        >
          Posiadamy odpowiednie kompetencje oraz zasoby umożliwiające
          przeprowadzenie kompleksowego procesu projektowego systemu.
        </Typography>
      </div>
      <div>
        <Typography
          style={{
            color: "#FFA033",
            fontSize: "36px",
            letterSpacing: "0.15em",
            marginLeft: "10%",
            marginRight: "10%",
            textAlign: "left",
          }}
        >
          SZAFY STEROWNICZE
        </Typography>
        <Typography
          style={{
            color: "#000000",
            fontSize: "24px",
            letterSpacing: "0.1em",
            marginLeft: "10%",
            marginRight: "10%",
          }}
        >
          Na podstawie schematów elektrycznych przeprowadzamy kompleksową
          prefabrykacje szaf sterowniczych.
        </Typography>
      </div>
      <div>
        <Typography
          style={{
            color: "#FFA033",
            fontSize: "36px",
            letterSpacing: "0.15em",
            marginLeft: "10%",
            marginRight: "10%",
            textAlign: "right",
          }}
        >
          MONTAŻ
        </Typography>
        <Typography
          style={{
            color: "#000000",
            fontSize: "24px",
            letterSpacing: "0.1em",
            marginLeft: "10%",
            marginRight: "10%",
            marginBottom: "5%",
          }}
        >
          Instalacja tras kablowych, przez montaż oraz połączenie szaf
          sterowniczych, monitoringu CCTV, systemów sieciowych aż po wykonanie
          pomiarów elektrycznych.
        </Typography>
      </div>
    </Paper>
  );
}
