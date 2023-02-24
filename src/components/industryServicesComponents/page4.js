import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import industry_background3 from "../img/industry_background3.png";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
const fonts = {
  header1: "40px !important",
  text1: "21px !important",
};
if (isMobile) {
  fonts.header1 = "42px !important";
  fonts.text1 = "42px !important";
}

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
    width: "100%",
  },
  header1: {
    color: "#FFCF40",
    fontSize: fonts.header1,
    letterSpacing: "0.15em",
    marginLeft: "10% !important",
    marginRight: "10% !important",
    textAlign: "left",
    width: "40%",
  },

  text1: {
    color: "#FFFFFF",
    fontSize: fonts.text1,
    letterSpacing: "0.1em",
    marginRight: "5% !important",
    textAlign: "left",
    width: "60%",
  },
});

export default function Page4(props) {
  const { t } = useTranslation();
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
          <Typography className={classes.header1}>
            {t("PRZYGOTOWANIE PLC/HMI")}
          </Typography>
          <Typography className={classes.text1}>
            {t(
              "Bazując na założeniach projektowych oraz opisie funkcjonalnym przygotujemy kompleksowo program PLC sterujący procesem oraz przygotujemy intuicyjną aplikację panelu HMI."
            )}
          </Typography>
        </div>
        <div className={classes.line1} style={{ alignItems: "space-between" }}>
          <Typography className={classes.header1}>{t("INTEGRACJA")}</Typography>
          <Typography className={classes.text1}>
            {t(
              "Nasi doświadczeni programiści zajmą się kompleksowo integracją oraz uruchomieniem dostarczonego systemu."
            )}
          </Typography>
        </div>
        <div className={classes.line1}>
          <Typography className={classes.header1}>{t("SZKOLENIE")}</Typography>
          <Typography className={classes.text1}>
            {t(
              "Po uruchomieniu systemu zadbamy o to, aby obsługa była przygotowana na pracę z nim oraz wiedziała jakie czynności należy przeprowadzać okresowo, aby zapewnić jego bezawaryjną pracę."
            )}
          </Typography>
        </div>
        <div className={classes.line1}>
          <Typography className={classes.header1}>{t("SERWIS")}</Typography>
          <Typography className={classes.text1}>
            {t(
              "Nasz dział serwisowy zadba o wsparcie obsługi w przypadku wystąpienia takiej konieczności. Oferujemy obsługę w języku polskim, angielskim, niemieckim oraz francuskim."
            )}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
