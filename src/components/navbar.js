import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { ReactComponent as CatImg } from "./img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { CircleFlag } from "react-circle-flags";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
const fonts = {
  buttonText: "1rem !important",
  logoWidth: 300,
  logoHeight: 200,
  flagHeight: 16,
  menuMinWidth: "25%",
};
if (isMobile) {
  fonts.buttonText = "2rem !important";
  fonts.logoWidth = 600;
  fonts.logoHeight = 400;
  fonts.flagHeight = 32;
  fonts.menuMinWidth = "50%";
}

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
    minWidth: fonts.menuMinWidth,
    // maxWidth: "50vw",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "space-around",
  },
  buttonText: {
    fontSize: fonts.buttonText,
  },
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
  return (
    <div className={classes.appbar}>
      {usePathname() === "/" && (
        <CatImg
          height={fonts.logoHeight}
          width={fonts.logoWidth}
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
          <Typography className={classes.buttonText}>
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
          <Typography className={classes.buttonText}>{t("O NAS")}</Typography>
        </Button>
        <Button
          component={Link}
          to={"/contact"}
          color="inherit"
          size="large"
          disabled={usePathname() === "/contact"}
        >
          <Typography className={classes.buttonText}>
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
          <CircleFlag countryCode="gb" height={fonts.flagHeight} />
        </Button>
        <Button
          className={classes.flags}
          onClick={() => {
            i18n.changeLanguage("PL");
          }}
        >
          <CircleFlag countryCode="pl" height={fonts.flagHeight} />
        </Button>
      </Paper>
    </div>
  );
}

export default Navbar;
