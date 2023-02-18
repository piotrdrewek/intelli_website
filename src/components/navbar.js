import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { ReactComponent as CatImg } from "./img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";

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
    minWidth: "25vw",
    // maxWidth: "50vw",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "space-around",
  },
  buttonText: {
    fontSize: "24px",
  },
});

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.appbar}>
      {usePathname() === "/" && (
        <CatImg height={200} width={300} className={classes.logo} />
      )}
      <Paper className={classes.menu}>
        <Button
          component={Link}
          to={"/"}
          color="inherit"
          size="large"
          disabled={usePathname() === "/"}
        >
          <Typography className={classes.buttonText}>STRONA GŁÓWNA</Typography>
        </Button>
        <Button
          component={Link}
          to={"/about"}
          color="inherit"
          size="large"
          disabled={usePathname() === "/about"}
        >
          <Typography className={classes.buttonText}>O NAS</Typography>
        </Button>
        <Button
          component={Link}
          to={"/contact"}
          color="inherit"
          size="large"
          disabled={usePathname() === "/contact"}
        >
          <Typography className={classes.buttonText}> KONTAKT</Typography>
        </Button>
      </Paper>
    </div>
  );
}

export default Navbar;
