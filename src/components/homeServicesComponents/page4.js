import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import home_system4 from "../img/home_system4.png";
import home_system5 from "../img/home_system5.png";
import home_system6 from "../img/home_system6.png";
import { Trans, useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

const fonts = {
  header1: "54px !important",
  header2: "28px !important",
  text1: "14px !important",
  imgHeight: "323px",
  imgWidth: "288px",
  div1Width: "300px",
};
if (isMobile) {
  fonts.header1 = "70px !important";
  fonts.header2 = "28px !important";
  fonts.text1 = "25px !important";
  fonts.imgHeight = "400px";
  fonts.imgWidth = "350px";
  fonts.div1Width = fonts.imgWidth;
}

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
    width: fonts.imgWidth,
  },
  header1: {
    color: "#FFA033",
    fontSize: fonts.header1,
    textAlign: "left",
    letterSpacing: "0.1em",
    marginTop: "75px !important",
    width: "100%",
    marginRight: "75px !important",
    textAlign: "right",
  },
  header2: {
    color: "#FFA033",
    fontSize: fonts.header2,
    letterSpacing: "0.15em",
    textAlign: "left",
    marginLeft: "1% !important",
  },
  text1: {
    color: "#000000",
    fontSize: fonts.text1,
    letterSpacing: "0.05em",
    textAlign: "left",
    marginLeft: "5% !important",
  },
});

export default function Page4(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Paper className={classes.content4}>
      <Typography className={classes.header1}>{t("Systemy")}</Typography>

      <div className={classes.half4} style={{ backgroundColor: "white" }}>
        <div className={classes.div} style={{ width: fonts.div1Width }}>
          <Typography className={classes.header2}>
            {t("MONITORUJĄCE I OPTYMALIZUJĄCE")}
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
            src={home_system4}
          />
          <Typography className={classes.text1}>
            {t(
              "Kontrola zużytych mediów, optymalizacja zużycia za pomocą automatyzacji z użyciem czujników obecności i harmonogramów."
            )}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography className={classes.header2}>
            {/* {t("STEROWANIA ROLETAMI")} */}
            <Trans i18nKey="STEROWANIA ROLETAMI" components={{ 1: <br /> }} />
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
            src={home_system5}
          />
          <Typography className={classes.text1}>
            {t(
              "Automatyzacja otwierania i zamykania rolet z użyciem harmonogramów i stacji pogodowej. Programowanie scen nastrojowych."
            )}
          </Typography>
        </div>
        <div className={classes.div}>
          <Typography className={classes.header2}>
            {t("STEROWANIA OŚWIETLENIEM")}
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
            src={home_system6}
          />
          <Typography className={classes.text1}>
            {t(
              "Automatyzacja oświetlenia za pomocą sensorów ruchu, natężenia światła i harmonogramów. Programowanie scen nastrojowych."
            )}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
