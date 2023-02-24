import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import industry_background4 from "../img/industry_background4.png";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
const fonts = {
  header1: "25px !important",
  text1: "30px !important",
  text2: "30px !important",
  half1Width: "60%",
  half2Width: " 40%",
};
if (isMobile) {
  fonts.header1 = "40px !important";
  fonts.text1 = "50px !important";
  fonts.text2 = "50px !important";
  fonts.half1Width = "40%";
  fonts.half2Width = "60%";
}

const useStyles = makeStyles({
  content5: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line6 / c-line1 / r-line7 / c-line3",
    height: "85vh",
    backgroundColor: "#cccccc!important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  },
  half5: {
    backgroundColor: "#cccccc",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    height: "85vh",
    // width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header1: {
    color: "#FFCF40",
    fontSize: fonts.header1,
    letterSpacing: "0.15em",
  },
  text1: {
    color: "#FFFFFF",
    fontSize: fonts.text1,
    letterSpacing: "0.25em",
    marginTop: "10% !important",
    marginBottom: "5% !important",
  },
  text2: {
    color: "#FFFFFF",
    fontSize: fonts.text2,
    letterSpacing: "0.15em",
  },
});

export default function IndustryServices(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Paper className={classes.content5}>
      <div
        className={classes.half5}
        style={{
          backgroundImage: `url(${industry_background4})`,
          width: fonts.half1Width,
        }}
      ></div>
      <div
        className={classes.half5}
        style={{ backgroundColor: "#23221E", width: fonts.half2Width }}
      >
        <Typography className={classes.header1}>
          {t("SKONTAKTUJ SIĘ Z NAMI")}
        </Typography>
        <Typography className={classes.text1}>BIURO@INTELLI.COM.PL</Typography>
        <Typography className={classes.text2}>(+48) 607 683 704</Typography>
      </div>
    </Paper>
  );
}
