import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import home_system1 from "../img/home_system1.png";
import home_system2 from "../img/home_system2.png";
import home_system3 from "../img/home_system3.png";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
const fonts = {
  header1: "54px !important",
  header2: "28px !important",
  text1: "14px !important",
  imgHeight: "323px",
  imgWidth: "288px",
};
if (isMobile) {
  fonts.header1 = "70px !important";
  fonts.header2 = "28px !important";
  fonts.text1 = "25px !important";
  fonts.imgHeight = "400px";
  fonts.imgWidth = "350px";
}
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
    width: fonts.imgWidth,
  },
  header1: {
    color: "#FFA033",
    fontSize: fonts.header1,
    textAlign: "left",
    letterSpacing: "0.1em",
    marginLeft: "75px !important",
    marginTop: "75px !important",
    width: "100%",
  },
  header2: {
    color: "#FFA033",
    fontSize: fonts.header2,
    letterSpacing: "0.15em",
    marginLeft: "1% !important",
    textAlign: "left",
  },
  text1: {
    color: "#000000",
    fontSize: fonts.text1,
    letterSpacing: "0.05em",
    textAlign: "left",
  },
});

export default function Page3(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Paper className={classes.content3}>
      <Typography className={classes.header1}>{t("Systemy")}</Typography>
      <div className={classes.half3} style={{ backgroundColor: "white" }}>
        <div className={classes.div}>
          <Typography className={classes.header2}>HVAC</Typography>
          <Box
            component="img"
            sx={{
              height: fonts.imgHeight,
              width: fonts.imgWidth,
              marginTop: "10%",
              marginBottom: "10%",
            }}
            alt="Your logo."
            src={home_system1}
          />
          <Typography className={classes.text1}>
            {t(
              "Sterowanie temperaturą i wentylacją w pomieszczeniach dla własnego komfortu i oszczędności."
            )}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography className={classes.header2}>
            {t("BEZPIECZEŃSTWA")}
          </Typography>
          <Box
            component="img"
            sx={{
              height: fonts.imgHeight,
              width: fonts.imgWidth,
              marginTop: "10%",
              marginBottom: "10%",
            }}
            alt="Your logo."
            src={home_system2}
          />
          <Typography className={classes.text1}>
            {t(
              "Systemy chroniące przed włamaniem i nieautoryzowanym dostępem. Symulacja obecności w budynku. Monitorowanie poziomu jakości powietrza w pomieszczeniu."
            )}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography className={classes.header2}>{t("MONITORING")}</Typography>
          <Box
            component="img"
            sx={{
              height: fonts.imgHeight,
              width: fonts.imgWidth,
              marginTop: "10%",
              marginBottom: "10%",
            }}
            alt="Your logo."
            src={home_system3}
          />
          <Typography className={classes.text1}>
            {t(
              "Integracja monitoringu z aplikacją zarządzania budynku. Automatyzacja bram wjazdowych za pomocą rozpoznawania tablic rejestracyjnych."
            )}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
