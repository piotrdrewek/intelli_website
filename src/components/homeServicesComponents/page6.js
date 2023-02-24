import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import home_background4 from "../img/home_background4.png";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
const fonts = {
  text1: "25px !important",
  text2: "30px !important",
  text3: "30px !important",
};
if (isMobile) {
  fonts.text1 = "50px !important";
  fonts.text2 = "60px !important";
  fonts.text3 = "60px !important";
}

const useStyles = makeStyles({
  content6: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    gridArea: "r-line7 / c-line1 / r-line8 / c-line3",
    backgroundColor: "#cccccc !important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    height: "85vh",
  },

  half6: {
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#FFCF40",
    fontSize: fonts.text1,
    letterSpacing: "0.15em",
  },
  text2: {
    color: "#000000",
    fontSize: fonts.text2,
    letterSpacing: "0.25em",
    marginTop: "10%",
    marginBottom: "5%",
  },
  text3: {
    color: "#000000",
    fontSize: fonts.text3,
    letterSpacing: "0.15em",
  },
});

export default function Page6(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Paper
      className={classes.content6}
      style={{
        backgroundImage: `url(${home_background4})`,
      }}
    >
      {/* <div className={classes.half6} style={{ width: "60%" }}></div> */}
      <div className={classes.half6}>
        <Typography className={classes.text1}>
          {t("SKONTAKTUJ SIĘ Z NAMI")}
        </Typography>
        <Typography className={classes.text2}>BIURO@INTELLI.COM.PL</Typography>
        <Typography className={classes.text3}>(+48) 607 683 704</Typography>
      </div>
    </Paper>
  );
}
