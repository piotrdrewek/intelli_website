import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import industry_background4 from "../img/industry_background4.png";
import { useTranslation } from "react-i18next";

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
});

export default function IndustryServices(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  return (
    <Paper className={classes.content5}>
      <div
        className={classes.half5}
        style={{
          backgroundImage: `url(${industry_background4})`,
          width: "60%",
        }}
      ></div>
      <div
        className={classes.half5}
        style={{ backgroundColor: "#23221E", width: "40%" }}
      >
        <Typography
          style={{
            color: "#FFCF40",
            fontSize: "25px",
            letterSpacing: "0.15em",
          }}
        >
          {t("SKONTAKTUJ SIĘ Z NAMI")}
        </Typography>
        <Typography
          style={{
            color: "#FFFFFF",
            fontSize: "30px",
            letterSpacing: "0.25em",
            marginTop: "10%",
            marginBottom: "5%",
          }}
        >
          BIURO@INTELLI.COM.PL
        </Typography>
        <Typography
          style={{
            color: "#FFFFFF",
            fontSize: "30px",
            letterSpacing: "0.15em",
          }}
        >
          (+48) 607 683 704
        </Typography>
      </div>
    </Paper>
  );
}
