import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography, Button } from "@mui/material";
import about_background2 from "../img/about_background2.png";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  content3: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line4 / c-line1 / r-line5 / c-line3",
    background: "rgba(128, 128, 128, 0) !important",
    height: "60vh",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0),0px 2px 2px 0px rgba(0,0,0,0),0px 1px 5px 0px rgba(0,0,0,0) !important",
  },
  content4: {
    gridArea: "r-line5 / c-line1 / r-line6 / c-line3",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "25vh",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0),0px 2px 2px 0px rgba(0,0,0,0),0px 1px 5px 0px rgba(0,0,0,0) !important",
  },
  half3: {
    backgroundColor: "#cccccc",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },

  button: {
    borderRadius: "30px !important",
    borderColor: "#FFA033 !important",
    background: "#FFA033 !important",
  },
});

export default function Page3(props) {
  const { t, i18n } = useTranslation();

  const classes = useStyles();
  return (
    <Paper className={classes.content3}>
      <div
        className={classes.half3}
        style={{ backgroundColor: "white", width: "40%" }}
      >
        <Typography
          style={{
            color: "#FFA033",
            fontSize: "30px",
            letterSpacing: "0.15em",
            textAlign: "left",
            marginTop: "10%",
          }}
        >
          {t("PRACUJ Z NAMI")}
        </Typography>
        <Typography
          style={{
            color: "#4E4E4E",
            fontSize: "18px",
            letterSpacing: "0.15em",
            textAlign: "left",
            marginLeft: "10%",
            marginRight: "5%",
          }}
        >
          {t(
            "W związku z ciągłym rozwojem, poszukujemy nowych członków naszego zespołu."
          )}
        </Typography>
        <Typography
          style={{
            color: "#FFCF40",
            fontSize: "18px",
            letterSpacing: "0.15em",
            textAlign: "left",
            marginLeft: "10%",
            marginRight: "5%",
          }}
        >
          {t("Uważasz, że mógłbyś wnieść swoją wartość do naszej firmy?")}
        </Typography>
        <Button variant="contained" className={classes.button}>
          <a
            href="mailto:biuro@intelli.com.pl"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography
              style={{
                color: "#FFFFFF",
                fontSize: "22px",
                letterSpacing: "0.2em",
              }}
            >
              {t("APLIKUJ")}
            </Typography>
          </a>
        </Button>
      </div>
      <div
        className={classes.half3}
        style={{ backgroundImage: `url(${about_background2})`, width: "60%" }}
      ></div>
      <Paper className={classes.content4}>
        <Typography
          style={{
            color: "#000000",
            fontSize: "30px",
            letterSpacing: "0.25em",
            // marginTop: "10%",
            // marginBottom: "5%",
          }}
        >
          BIURO@INTELLI.COM.PL
        </Typography>
        <Typography
          style={{
            color: "#000000",
            fontSize: "30px",
            letterSpacing: "0.15em",
          }}
        >
          (+48) 607 683 704
        </Typography>
      </Paper>
    </Paper>
  );
}
