import React from "react";
import Page1 from "./homeServicesComponents/page1";
import Page2 from "./homeServicesComponents/page2";
import Page3 from "./homeServicesComponents/page3";
import Page4 from "./homeServicesComponents/page4";
import Page5 from "./homeServicesComponents/page5";
import Page6 from "./homeServicesComponents/page6";
import Footer from "./footer";
import Navbar from "./navbar";
import styles from "../css/homeServices.module.css";

export default function HomeServices(props) {
  return (
    <div className={styles.homeServicesApp}>
      <Page1 isMobile={props.isMobile} />
      <Page2 isMobile={props.isMobile} />
      <Page3 isMobile={props.isMobile} />
      <Page4 isMobile={props.isMobile} />
      <Page5 isMobile={props.isMobile} />
      <Page6 isMobile={props.isMobile} />
      <Navbar isMobile={props.isMobile} />
      <Footer isMobile={props.isMobile} className={styles.homeServicesFooter} />
    </div>
  );
}
