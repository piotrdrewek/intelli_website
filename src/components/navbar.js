import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { ReactComponent as CatImg } from "./img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { CircleFlag } from "react-circle-flags";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  appbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-end",
    background: "rgba(128, 128, 128, 0) !important",
    gridArea: "r-line1 / c-line1 / r-line2 / c-line3",
    height: "25vh",
    flexFlow: "row wrap",
  },
  logo: {
    marginLeft: "10% !important",
    marginRight: "auto !important",
  },
  menu: {
    color: "white !important",
    borderTopLeftRadius: "25px !important ",
    borderBottomLeftRadius: "25px !important",
    borderTopRightRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
    background: "#bcb9ad !important",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "space-around",
  },
  buttonText: {},
  flags: {
    color: "white !important",
    minWidth: "0px !important",
  },
});

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

function Navbar(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
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
    <div className={classes.appbar}>
      {usePathname() === "/" && (
        <CatImg
          height={`${logoHeight}`}
          width={`${logoWidth}`}
          className={classes.logo}
        />
      )}
      <Paper className={classes.menu}>
        <Button
          component={Link}
          to={"/"}
          color="inherit"
          size="large"
          disabled={usePathname() === "/"}
        >
          <Typography
            className={classes.buttonText}
            style={{ fontSize: `${buttonTextSize}` }}
          >
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
          <Typography
            className={classes.buttonText}
            style={{ fontSize: `${buttonTextSize}` }}
          >
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
          <Typography
            className={classes.buttonText}
            style={{ fontSize: `${buttonTextSize}` }}
          >
            {" "}
            {t("KONTAKT")}
          </Typography>
        </Button>
        <Button
          className={classes.flags}
          onClick={() => {
            i18n.changeLanguage("EN");
          }}
        >
          <CircleFlag countryCode="gb" height={`${flagHeight}`} />
        </Button>
        <Button
          className={classes.flags}
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
