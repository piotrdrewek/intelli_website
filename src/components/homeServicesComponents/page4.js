import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import home_system4 from "../img/home_system4.png";
import home_system5 from "../img/home_system5.png";
import home_system6 from "../img/home_system6.png";
import { Trans, useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../../css/homeServices/page4.module.css";

export default function Page4(props) {
  const { t } = useTranslation();
  const [header1Size, setHeader1Size] = useState(
    props.isMobile ? "27px" : "54px"
  );
  const [header1MarginTop, setHeader1MarginTop] = useState(
    props.isMobile ? "10px" : "75px"
  );
  const [header2Size, setHeader2Size] = useState(
    props.isMobile ? "11px" : "28px"
  );
  const [textSize, setTextSize] = useState(props.isMobile ? "7px" : "14px");
  const [imgHeight, setImgHeight] = useState(props.isMobile ? "161px" : "323x");
  const [imgWidth, setimgWidth] = useState(props.isMobile ? "144px" : "288px");
  const [halfWrap, setHalfWrap] = useState(props.isMobile ? "wrap" : "nowrap");
  const [maxWidth, setmaxWidth] = useState(props.isMobile ? "150px" : "300px");

  useEffect(() => {
    setHeader1Size(props.isMobile ? "27px" : "54px");
    setHeader1MarginTop(props.isMobile ? "10px" : "75px");
    setHeader2Size(props.isMobile ? "11px" : "28px");
    setTextSize(props.isMobile ? "7px" : "14px");
    setImgHeight(props.isMobile ? "161px" : "323x");
    setimgWidth(props.isMobile ? "144px" : "288px");
    setmaxWidth(props.isMobile ? "150px" : "300px");

    setHalfWrap(props.isMobile ? "wrap" : "nowrap");
  }, [props.isMobile]);
  return (
    <Paper className={styles.page4Content}>
      <Typography
        className={styles.page4Header1}
        style={{ fontSize: `${header1Size}`, marginTop: `${header1MarginTop}` }}
      >
        {t("Systemy")}
      </Typography>

      <div
        className={styles.page4Half}
        style={{ backgroundColor: "white", flexWrap: `${halfWrap}` }}
      >
        <div className={styles.page4Div} style={{ maxWidth: `${maxWidth}` }}>
          <Typography
            className={styles.page4Header2}
            style={{ fontSize: `${header2Size}` }}
          >
            {t("MONITORUJĄCE I OPTYMALIZUJĄCE")}
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
            src={home_system4}
          />
          <Typography
            className={styles.page4Text1}
            style={{ fontSize: `${textSize}`, width: `${imgWidth}` }}
          >
            {t(
              "Kontrola zużytych mediów, optymalizacja zużycia za pomocą automatyzacji z użyciem czujników obecności i harmonogramów."
            )}
          </Typography>
        </div>
        <div className={styles.page4Div} style={{ maxWidth: `${maxWidth}` }}>
          <Typography
            className={styles.page4Header2}
            style={{ fontSize: `${header2Size}` }}
          >
            {/* {t("STEROWANIA ROLETAMI")} */}
            <Trans i18nKey="STEROWANIA ROLETAMI" components={{ 1: <br /> }} />
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
            src={home_system5}
          />
          <Typography
            className={styles.page4Text1}
            style={{ fontSize: `${textSize}` }}
          >
            {t(
              "Automatyzacja otwierania i zamykania rolet z użyciem harmonogramów i stacji pogodowej. Programowanie scen nastrojowych."
            )}
          </Typography>
        </div>
        <div className={styles.page4Div} style={{ maxWidth: `${maxWidth}` }}>
          <Typography
            className={styles.page4Header2}
            style={{ fontSize: `${header2Size}` }}
          >
            {t("STEROWANIA OŚWIETLENIEM")}
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
            src={home_system6}
          />
          <Typography
            className={styles.page4Text1}
            style={{ fontSize: `${textSize}` }}
          >
            {t(
              "Automatyzacja oświetlenia za pomocą sensorów ruchu, natężenia światła i harmonogramów. Programowanie scen nastrojowych."
            )}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
