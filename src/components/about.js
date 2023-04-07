import React from "react";
import Page1 from "./aboutComponents/page1";
import Page2 from "./aboutComponents/page2";
import Page3 from "./aboutComponents/page3";
import Footer from "./footer";
import Navbar from "./navbar";
import styles from "../css/about.module.css";

export default function About(props) {
  return (
    <div className={styles.aboutServicesApp}>
      <Page1 isMobile={props.isMobile} />
      <Page2 isMobile={props.isMobile} />
      <Page3 isMobile={props.isMobile} />
      <Navbar isMobile={props.isMobile} />
      <Footer
        isMobile={props.isMobile}
        className={styles.aboutServicesFooter}
      />
    </div>
  );
}
