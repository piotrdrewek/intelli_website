import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography } from "@mui/material";
import home_background4 from "./img/home_background4.png";
import { useTranslation } from "react-i18next";
import Footer from "./footer";
import Navbar from "./navbar";
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
  app: {
    display: "grid",
    gridTemplateColumns: "[c-line1] 50% [c-line2] 50% [c-line3]",
    gridTemplateRows: "[r-line1] 25% [r-line2] 60% [r-line3] 15% [r-line4]",
    background: "rgba(128, 128, 128, 0) !important",
    textAlign: "center",
  },
  content1: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    gridArea: "r-line1 / c-line1 / r-line3 / c-line3",
    height: "85vh",
    backgroundColor: "#cccccc !important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  },

  half1: {
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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

export default function Contact(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Paper
        className={classes.content1}
        style={{
          backgroundImage: `url(${home_background4})`,
        }}
      >
        {/* <div className={classes.half1} style={{ width: "60%" }}></div> */}
        <div className={classes.half1}>
          <Typography className={classes.text1}>
            {t("SKONTAKTUJ SIĘ Z NAMI")}
          </Typography>
          <Typography className={classes.text2}>
            BIURO@INTELLI.COM.PL
          </Typography>
          <Typography className={classes.text3}>(+48) 607 683 704</Typography>
        </div>
      </Paper>
      <Navbar />
      <Footer className={classes.footer} />
    </div>
  );
}
