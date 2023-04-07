import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import home_system1 from "../img/home_system1.png";
import home_system2 from "../img/home_system2.png";
import home_system3 from "../img/home_system3.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../../css/homeServices/page3.module.css";
export default function Page3(props) {
  const { t } = useTranslation();
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
    <Paper className={styles.page3Content}>
      <Typography
        className={styles.page3Header1}
        style={{ fontSize: `${header1Size}`, marginTop: `${header1MarginTop}` }}
      >
        {t("Systemy")}
      </Typography>
      <div
        className={styles.page3Half}
        style={{
          backgroundColor: "white",
          flexWrap: `${halfWrap}`,
        }}
      >
        <div className={styles.page3Div} style={{ width: `${imgWidth}` }}>
          <Typography
            className={styles.page3Header2}
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
            className={styles.page3Text1}
            style={{ fontSize: `${textSize}` }}
          >
            {t(
              "Sterowanie temperaturą i wentylacją w pomieszczeniach dla własnego komfortu i oszczędności."
            )}
          </Typography>
        </div>
        <div className={styles.page3Div} style={{ width: `${imgWidth}` }}>
          <Typography
            className={styles.page3Header2}
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
            className={styles.page3Text1}
            style={{ fontSize: `${textSize}` }}
          >
            {t(
              "Systemy chroniące przed włamaniem i nieautoryzowanym dostępem. Symulacja obecności w budynku. Monitorowanie poziomu jakości powietrza w pomieszczeniu."
            )}
          </Typography>
        </div>
        <div className={styles.page3Div} style={{ width: `${imgWidth}` }}>
          <Typography
            className={styles.page3Header2}
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
            className={styles.page3Text1}
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
