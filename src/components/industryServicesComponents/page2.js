import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import industry_background2 from "../img/industry_background2.png";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
const fonts = {
  header1: "16px !important",
  header2: "54px !important",
  text1: "24px !important",
  text1MarginBottom: "5% !important",
  text1Width: "40%",
};
if (isMobile) {
  fonts.header1 = "32px !important";
  fonts.header2 = "80px !important";
  fonts.text1 = "48px !important";
  fonts.text1MarginBottom = "20% !important";
  fonts.text1Width = "auto";
}

const useStyles = makeStyles({
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
  half2: {
    height: "100vh",
    width: "50%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  header1: {
    color: "#FFA033",
    fontSize: fonts.header1,
    letterSpacing: "0.3em",
    marginLeft: "10% !important",
    textAlign: "left",
  },
  header2: {
    color: "#FFA033",
    fontSize: fonts.header2,
    letterSpacing: "0.15em",
    marginLeft: "10% !important",
    textAlign: "left",
  },
  text1: {
    color: "#FFFFFF",
    fontSize: fonts.text1,
    letterSpacing: "0.1em",
    width: fonts.text1Width,
    marginTop: "5% !important",
    marginBottom: fonts.text1MarginBottom,
    marginLeft: "10% !important",
    marginRight: "10% !important",
    textAlign: "left",
  },
});

export default function Page2(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Paper
      className={classes.content2}
      style={{ backgroundImage: `url(${industry_background2})` }}
    >
      <Typography className={classes.header1}>{t("NASZE USŁUGI")}</Typography>
      <Typography className={classes.header2}>
        {t("Nadzory inwestorskie")}
      </Typography>
      <Typography className={classes.text1}>
        {t(
          "Nasi specjaliści pomogą Państwu w kompleksowym procesie analizy założeń projektowych, ofert wykonawczych. Dodatkowo wykonamy dla Państwa audyt funkcjonalny oraz walidację bezpieczeństwa przez specjalistę z certyfikatem CMSE®."
        )}
      </Typography>
    </Paper>
  );
}
