import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import home_system1 from "../img/home_system1.png";
import home_system2 from "../img/home_system2.png";
import home_system3 from "../img/home_system3.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles({
  content3: {
    display: "flex",
    justifyContent: "flex-end",
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
    gap: "5%",
    maxHeight: "100vh",
  },
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "flex-start",
    marginRight: "1%",
  },
  header1: {
    color: "#FFA033",
    textAlign: "left",
    letterSpacing: "0.1em",
    marginLeft: "75px !important",
    width: "100%",
  },
  header2: {
    color: "#FFA033",
    letterSpacing: "0.15em",
    marginLeft: "1% !important",
    textAlign: "left",
  },
  text1: {
    color: "#000000",
    letterSpacing: "0.05em",
    textAlign: "left",
  },
});

export default function Page3(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [header1Size, setHeader1Size] = useState(
    props.isMobile ? "27px" : "54px"
  );
  const [header1MarginTop, setHeader1MarginTop] = useState(
    props.isMobile ? "10px" : "75px"
  );
  const [header2Size, setHeader2Size] = useState(
    props.isMobile ? "14px" : "28px"
  );
  const [textSize, setTextSize] = useState(props.isMobile ? "7px" : "14px");
  const [imgHeight, setImgHeight] = useState(props.isMobile ? "161px" : "323x");
  const [imgWidth, setimgWidth] = useState(props.isMobile ? "144px" : "288px");
  const [halfWrap, setHalfWrap] = useState(props.isMobile ? "wrap" : "nowrap");

  useEffect(() => {
    setHeader1Size(props.isMobile ? "27px" : "54px");
    setHeader1MarginTop(props.isMobile ? "10px" : "75px");
    setHeader2Size(props.isMobile ? "14px" : "28px");
    setTextSize(props.isMobile ? "7px" : "14px");
    setImgHeight(props.isMobile ? "161px" : "323x");
    setimgWidth(props.isMobile ? "144px" : "288px");
    setHalfWrap(props.isMobile ? "wrap" : "nowrap");
  }, [props.isMobile]);
  return (
    <Paper className={classes.content3}>
      <Typography
        className={classes.header1}
        style={{ fontSize: `${header1Size}`, marginTop: `${header1MarginTop}` }}
      >
        {t("Systemy")}
      </Typography>
      <div
        className={classes.half3}
        style={{
          backgroundColor: "white",
          flexWrap: `${halfWrap}`,
        }}
      >
        <div className={classes.div} style={{ width: `${imgWidth}` }}>
          <Typography
            className={classes.header2}
            style={{ fontSize: `${header2Size}` }}
          >
            HVAC
          </Typography>
          <Box
            component="img"
            sx={{
              height: `${imgHeight}`,
              width: `${imgWidth}`,
              marginTop: "10%",
              marginBottom: "10%",
            }}
            alt="Your logo."
            src={home_system1}
          />
          <Typography
            className={classes.text1}
            style={{ fontSize: `${textSize}` }}
          >
            {t(
              "Sterowanie temperaturą i wentylacją w pomieszczeniach dla własnego komfortu i oszczędności."
            )}
          </Typography>
        </div>
        <div className={classes.div} style={{ width: `${imgWidth}` }}>
          <Typography
            className={classes.header2}
            style={{ fontSize: `${header2Size}` }}
          >
            {t("BEZPIECZEŃSTWA")}
          </Typography>
          <Box
            component="img"
            sx={{
              height: `${imgHeight}`,
              width: `${imgWidth}`,
              marginTop: "10%",
              marginBottom: "10%",
            }}
            alt="Your logo."
            src={home_system2}
          />
          <Typography
            className={classes.text1}
            style={{ fontSize: `${textSize}` }}
          >
            {t(
              "Systemy chroniące przed włamaniem i nieautoryzowanym dostępem. Symulacja obecności w budynku. Monitorowanie poziomu jakości powietrza w pomieszczeniu."
            )}
          </Typography>
        </div>
        <div className={classes.div} style={{ width: `${imgWidth}` }}>
          <Typography
            className={classes.header2}
            style={{ fontSize: `${header2Size}` }}
          >
            {t("MONITORING")}
          </Typography>
          <Box
            component="img"
            sx={{
              height: `${imgHeight}`,
              width: `${imgWidth}`,
              marginTop: "10%",
              marginBottom: "10%",
            }}
            alt="Your logo."
            src={home_system3}
          />
          <Typography
            className={classes.text1}
            style={{ fontSize: `${textSize}` }}
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
