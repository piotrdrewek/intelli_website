import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography, Button } from "@mui/material";
import about_background1 from "./img/about_background1.png";
import about_background2 from "./img/about_background2.png";
import Footer from "./footer";
import Navbar from "./navbar";

const useStyles = makeStyles({
  app: {
    display: "grid",
    gridTemplateColumns: "[c-line1] 50% [c-line2] 50% [c-line3]",
    gridTemplateRows: "[r-line1] 25% [r-line2] 60% [r-line3] 15% [r-line4]",
    background: "rgba(128, 128, 128, 0) !important",
    textAlign: "center",
  },
  content1: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line1 / c-line1 / r-line3 / c-line3",
    height: "85vh",
    backgroundColor: "#cccccc !important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  },

  half1: {
    backgroundColor: "#cccccc",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    height: "100%",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },

  button: {
    borderRadius: "30px !important",
    borderColor: "#FFA033 !important",
    background: "#FFA033 !important",
    marginBottom: "20% !important",
  },

  footer: {
    display: "flex",
    backgroundColor: "#white !important",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "bold",
    gridArea: "r-lin2 / c-line1 / r-line3 / c-line3",
    height: " 15vh",
  },
});

export default function Career(props) {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Paper className={classes.content1}>
        <div
          className={classes.half1}
          style={{ backgroundColor: "white", width: "40%" }}
        >
          <Typography
            style={{
              color: "#FFA033",
              fontSize: "30px",
              letterSpacing: "0.15em",
              textAlign: "left",
              marginTop: "20%",
            }}
          >
            PRACUJ Z NAMI
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
            W związku z ciągłym rozwojem, poszukujemy nowych członków naszego
            zespołu.
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
            Uważasz, że mógłbyś wnieść swoją wartość do naszej firmy?
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
                APLIKUJ
              </Typography>
            </a>
          </Button>
        </div>
        <div
          className={classes.half1}
          style={{ backgroundImage: `url(${about_background2})`, width: "60%" }}
        ></div>
      </Paper>

      <Navbar />
      <Footer className={classes.footer} />
    </div>
  );
}
