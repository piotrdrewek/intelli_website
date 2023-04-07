import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { ReactComponent as CatImg } from "./img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import styles from "../css/navbar.module.css";

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

function Navbar(props) {
  const { t, i18n } = useTranslation();
  const [buttonTextSize, setButtonTextSize] = useState(
    props.isMobile ? "0.5rem" : "1rem"
  );
  const [logoHeight, setlogoHeight] = useState(props.isMobile ? "100" : "200");
  const [logoWidth, setlogoWidth] = useState(props.isMobile ? "150" : "300");
  const [flagHeight, setFlagHeight] = useState(props.isMobile ? "8" : "16");

  useEffect(() => {
    setButtonTextSize(props.isMobile ? "0.5rem" : "1rem");
    setlogoHeight(props.isMobile ? "100" : "200");
    setlogoWidth(props.isMobile ? "150" : "300");
    setFlagHeight(props.isMobile ? "8" : "16");
  }, [props.isMobile]);

  return (
    <div className={styles.navbarAppbar}>
      {usePathname() === "/" && (
        <CatImg
          height={`${logoHeight}`}
          width={`${logoWidth}`}
          className={styles.navbarLogo}
        />
      )}
      <Paper className={styles.navbarMenu}>
        <Button
          component={Link}
          to={"/"}
          color="inherit"
          size="large"
          disabled={usePathname() === "/"}
        >
          <Typography style={{ fontSize: `${buttonTextSize}` }}>
            {t("STRONA GŁÓWNA")}
          </Typography>
        </Button>
        <Button
          component={Link}
          to={"/about"}
          color="inherit"
          size="large"
          disabled={usePathname() === "/about"}
        >
          <Typography style={{ fontSize: `${buttonTextSize}` }}>
            {t("O NAS")}
          </Typography>
        </Button>
        <Button
          component={Link}
          to={"/contact"}
          color="inherit"
          size="large"
          disabled={usePathname() === "/contact"}
        >
          <Typography style={{ fontSize: `${buttonTextSize}` }}>
            {" "}
            {t("KONTAKT")}
          </Typography>
        </Button>
        <Button
          className={styles.navbarFlags}
          onClick={() => {
            i18n.changeLanguage("EN");
          }}
        >
          <CircleFlag countryCode="gb" height={`${flagHeight}`} />
        </Button>
        <Button
          className={styles.navbarFlags}
          onClick={() => {
            i18n.changeLanguage("PL");
          }}
        >
          <CircleFlag countryCode="pl" height={`${flagHeight}`} />
        </Button>
      </Paper>
    </div>
  );
}

export default Navbar;
