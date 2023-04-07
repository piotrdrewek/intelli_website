import React from "react";
import { makeStyles } from "@mui/styles";
import Page1 from "./homeServicesComponents/page1";
import Page2 from "./homeServicesComponents/page2";
import Page3 from "./homeServicesComponents/page3";
import Page4 from "./homeServicesComponents/page4";
import Page5 from "./homeServicesComponents/page5";
import Page6 from "./homeServicesComponents/page6";
import Footer from "./footer";
import Navbar from "./navbar";

const useStyles = makeStyles({
  app: {
    display: "grid",
    gridTemplateColumns: "[c-line1] 50% [c-line2] 50% [c-line3]",
    gridTemplateRows:
      "[r-line1] 25vh [r-line2] 75vh [r-line3] 100vh [r-line4] 100vh [r-line5] 100vh [r-line6]  100vh [r-line7]  85vh [r-line8] 15vh [r-line9]",
    background: "rgba(128, 128, 128, 0) !important",
    textAlign: "center",
  },
  footer: {
    display: "flex",
    backgroundColor: "#white !important",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    fontWeight: "bold",
    gridArea: "r-line8 / c-line1 / r-line9 / c-line3",
    minHeight: " 15vh",
    width: "100%",
    flexDirection: "column",
  },
});

export default function HomeServices(props) {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Page1 isMobile={props.isMobile} />
      <Page2 isMobile={props.isMobile} />
      <Page3 isMobile={props.isMobile} />
      <Page4 isMobile={props.isMobile} />
      <Page5 isMobile={props.isMobile} />
      <Page6 isMobile={props.isMobile} />
      <Navbar isMobile={props.isMobile} />
      <Footer isMobile={props.isMobile} className={classes.footer} />
    </div>
  );
}
