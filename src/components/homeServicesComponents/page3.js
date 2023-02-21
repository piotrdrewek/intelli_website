import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import home_system1 from "../img/home_system1.png";
import home_system2 from "../img/home_system2.png";
import home_system3 from "../img/home_system3.png";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  content3: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line4 / c-line1 / r-line5 / c-line3",
    background: "rgba(128, 128, 128, 0) !important",
    height: "100vh",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0),0px 2px 2px 0px rgba(0,0,0,0),0px 1px 5px 0px rgba(0,0,0,0) !important",
  },
  half3: {
    height: "75%",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginLeft: "20%",
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

export default function Page3(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  return (
    <Paper className={classes.content3}>
      <Typography
        style={{
          color: "#FFA033",
          fontSize: "54px",
          letterSpacing: "0.1em",
          marginLeft: "75px",
          marginTop: "75px",
          textAlign: "left",
          width: "100%",
        }}
      >
        {t("Systemy")}
      </Typography>
      <div className={classes.half3} style={{ backgroundColor: "white" }}>
        <div className={classes.div}>
          <Typography
            style={{
              color: "#FFA033",
              fontSize: "28px",
              letterSpacing: "0.15em",
            }}
          >
            HVAC
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
            src={home_system1}
          />
          <Typography
            style={{
              color: "#000000",
              fontSize: "14px",
              letterSpacing: "0.05em",
              textAlign: "left",
            }}
          >
            {t(
              "Sterowanie temperaturą i wentylacją w pomieszczeniach dla własnego komfortu i oszczędności."
            )}
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
            {t("BEZPIECZEŃSTWA")}
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
            src={home_system2}
          />
          <Typography
            style={{
              color: "#000000",
              fontSize: "14px",
              letterSpacing: "0.05em",
              textAlign: "left",
            }}
          >
            {t(
              "Systemy chroniące przed włamaniem i nieautoryzowanym dostępem. Symulacja obecności w budynku. Monitorowanie poziomu jakości powietrza w pomieszczeniu."
            )}
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
            {t("MONITORING")}
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
            src={home_system3}
          />
          <Typography
            style={{
              color: "#000000",
              fontSize: "14px",
              letterSpacing: "0.05em",
              textAlign: "left",
              marginRight: "2%",
            }}
          >
            {t(
              "Integracja monitoringu z aplikacją zarządzania budynku. Automatyzacja bram wjazdowych za pomocą rozpoznawania tablic rejestracyjnych."
            )}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}