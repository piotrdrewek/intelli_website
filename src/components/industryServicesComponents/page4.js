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
              "Bazuj??c na za??o??eniach projektowych oraz opisie funkcjonalnym przygotujemy kompleksowo program PLC steruj??cy procesem oraz przygotujemy intuicyjn?? aplikacj?? panelu HMI."
            )}
          </Typography>
        </div>
        <div className={classes.line1} style={{ alignItems: "space-between" }}>
          <Typography className={classes.header1}>{t("INTEGRACJA")}</Typography>
          <Typography className={classes.text1}>
            {t(
              "Nasi do??wiadczeni programi??ci zajm?? si?? kompleksowo integracj?? oraz uruchomieniem dostarczonego systemu."
            )}
          </Typography>
        </div>
        <div className={classes.line1}>
          <Typography className={classes.header1}>{t("SZKOLENIE")}</Typography>
          <Typography className={classes.text1}>
            {t(
              "Po uruchomieniu systemu zadbamy o to, aby obs??uga by??a przygotowana na prac?? z nim oraz wiedzia??a jakie czynno??ci nale??y przeprowadza?? okresowo, aby zapewni?? jego bezawaryjn?? prac??."
            )}
          </Typography>
        </div>
        <div className={classes.line1}>
          <Typography className={classes.header1}>{t("SERWIS")}</Typography>
          <Typography className={classes.text1}>
            {t(
              "Nasz dzia?? serwisowy zadba o wsparcie obs??ugi w przypadku wyst??pienia takiej konieczno??ci. Oferujemy obs??ug?? w j??zyku polskim, angielskim, niemieckim oraz francuskim."
            )}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
