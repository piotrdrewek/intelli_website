import React from "react";
import { Paper, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import home from "./img/home.png";
import industry from "./img/industry.png";
import Footer from "./footer";
import Navbar from "./navbar";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../css/home.module.css";
import commonStyles from "../css/common.module.css";

export default function Home(props) {
  const { t } = useTranslation();
  const [fontSize, setFontSize] = useState(props.isMobile ? "0.5rem" : "1rem");
  const [buttonBorderSize, setbuttonBorderSize] = useState(
    props.isMobile ? "1.5px solid" : "3px solid"
  );

  useEffect(() => {
    setFontSize(props.isMobile ? "0.5rem" : "1rem");
    setbuttonBorderSize(props.isMobile ? "1.5px solid" : "3px solid");
  }, [props.isMobile]);

  return (
    <div className={commonStyles.onePageApp}>
      <Paper className={styles.homeContent}>
        <div
          className={styles.homeHalf}
          style={{ backgroundImage: `url(${industry})` }}
        >
          <Button
            variant="outlined"
            component={Link}
            to={"/industryServices"}
            className={styles.homeButton}
            style={{ border: `${buttonBorderSize}` }}
          >
            <Typography style={{ fontSize: `${fontSize}` }}>
              {t("AUTOMATYKA PRZEMYSŁOWA")}
            </Typography>
          </Button>
        </div>
        <div
          className={styles.homeHalf}
          style={{ backgroundImage: `url(${home})` }}
        >
          <Button
            variant="outlined"
            component={Link}
            to={"/homeServices"}
            className={styles.homeButton}
            style={{ border: `${buttonBorderSize}` }}
          >
            <Typography style={{ fontSize: `${fontSize}` }}>
              {t("AUTOMATYKA DOMOWA")}
            </Typography>
          </Button>
        </div>
      </Paper>
      <Navbar isMobile={props.isMobile} />
      <Footer
        isMobile={props.isMobile}
        className={commonStyles.onePageFooter}
      />
    </div>
  );
}
