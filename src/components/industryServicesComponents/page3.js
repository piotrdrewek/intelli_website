import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles({
  app: {
    display: "grid",
    gridTemplateColumns: "[c-line1] 50% [c-line2] 50% [c-line3]",
    gridTemplateRows:
      "[r-line1] 25vh [r-line2] 75vh [r-line3] 100vh [r-line4] 100vh [r-line5] 100vh [r-line6] 85vh [r-line7] 15vh [r-line8]",
    background: "rgba(128, 128, 128, 0) !important",
    textAlign: "center",
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
  header1: {
    color: "#FFA033",
    letterSpacing: "0.15em",
    marginLeft: "10% !important",
    marginRight: "10% !important",
  },

  text1: {
    color: "#000000",
    letterSpacing: "0.1em",
    marginLeft: "10% !important",
    marginRight: "10% !important",
  },
});

export default function Page3(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [header1Size, setHeader1Size] = useState(
    props.isMobile ? "18px" : "36px"
  );
  const [textSize, setTextSize] = useState(props.isMobile ? "12px" : "24px");
  useEffect(() => {
    setHeader1Size(props.isMobile ? "18px" : "36px");
    setTextSize(props.isMobile ? "12px" : "24px");
  }, [props.isMobile]);

  return (
    <Paper className={classes.content3} style={{ backgroundColor: "white" }}>
      <div>
        <Typography
          className={classes.header1}
          style={{
            marginTop: "5%",
            textAlign: "left",
            fontSize: `${header1Size}`,
          }}
        >
          {t("KONCEPCJA")}
        </Typography>
        <Typography
          className={classes.text1}
          style={{ fontSize: `${textSize}` }}
        >
          {t(
            "Doradztwo w zakresie określenia potrzeb klienta dotyczących możliwości optymalizacji procesów poprzez dobranie odpowiedniego typu systemu automatycznego"
          )}
        </Typography>
      </div>
      <div>
        <Typography
          className={classes.header1}
          style={{
            textAlign: "right",
            fontSize: `${header1Size}`,
          }}
        >
          {t("PROJEKT")}
        </Typography>
        <Typography
          className={classes.text1}
          style={{ fontSize: `${textSize}` }}
        >
          {t(
            "Posiadamy odpowiednie kompetencje oraz zasoby umożliwiające przeprowadzenie kompleksowego procesu projektowego systemu."
          )}
        </Typography>
      </div>
      <div>
        <Typography
          className={classes.header1}
          style={{
            textAlign: "left",
            fontSize: `${header1Size}`,
          }}
        >
          {t("SZAFY STEROWNICZE")}
        </Typography>
        <Typography
          className={classes.text1}
          style={{ fontSize: `${textSize}` }}
        >
          {t(
            "Na podstawie schematów elektrycznych przeprowadzamy kompleksową prefabrykacje szaf sterowniczych."
          )}
        </Typography>
      </div>
      <div>
        <Typography
          className={classes.header1}
          style={{
            textAlign: "right",
            fontSize: `${header1Size}`,
          }}
        >
          {t("MONTAŻ")}
        </Typography>
        <Typography
          className={classes.text1}
          style={{
            marginBottom: "5%",
            fontSize: `${textSize}`,
          }}
        >
          {t(
            "Instalacja tras kablowych, przez montaż oraz połączenie szaf sterowniczych, monitoringu CCTV, systemów sieciowych aż po wykonanie pomiarów elektrycznych."
          )}
        </Typography>
      </div>
    </Paper>
  );
}
