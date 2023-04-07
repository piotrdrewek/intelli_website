import React from "react";
import Page1 from "./industryServicesComponents/page1";
import Page2 from "./industryServicesComponents/page2";
import Page3 from "./industryServicesComponents/page3";
import Page4 from "./industryServicesComponents/page4";
import Page5 from "./industryServicesComponents/page5";
import Footer from "./footer";
import Navbar from "./navbar";
import styles from "../css/industryServices.module.css";

export default function IndustryServices(props) {
  return (
    <div className={styles.industryServicesApp}>
      <Page1 isMobile={props.isMobile} />
      <Page2 isMobile={props.isMobile} />
      <Page3 isMobile={props.isMobile} />
      <Page4 isMobile={props.isMobile} />
      <Page5 isMobile={props.isMobile} />
      <Navbar isMobile={props.isMobile} />
      <Footer
        isMobile={props.isMobile}
        className={styles.industryServicesFooter}
      />
    </div>
  );
}
