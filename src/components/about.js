import React from "react";
import { makeStyles } from "@mui/styles";
import Page1 from "./aboutComponents/page1";
import Page2 from "./aboutComponents/page2";
import Page3 from "./aboutComponents/page3";
import Footer from "./footer";
import Navbar from "./navbar";

const useStyles = makeStyles({
  app: {
    display: "grid",
    gridTemplateColumns: "[c-line1] 50% [c-line2] 50% [c-line3]",
    gridTemplateRows:
      "[r-line1] 25vh [r-line2] 75vh [r-line3] 100vh [r-line4]  60vh [r-line5] 25vh [r-line6] 15vh [r-line7]",
    background: "rgba(128, 128, 128, 0) !important",
    textAlign: "center",
  },
  footer: {
    display: "flex",
    backgroundColor: "#white !important",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    fontWeight: "bold",
    gridArea: "r-line6 / c-line1 / r-line7 / c-line3",
    minHeight: " 15vh",
    width: "100%",
    flexDirection: "column",
  },
});

export default function About(props) {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Page1 isMobile={props.isMobile} />
      <Page2 isMobile={props.isMobile} />
      <Page3 isMobile={props.isMobile} />
      <Navbar isMobile={props.isMobile} />
      <Footer isMobile={props.isMobile} className={classes.footer} />
    </div>
  );
}
