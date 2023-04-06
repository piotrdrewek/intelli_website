import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "1%",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    color: "black",
    justifyContent: "center",
    alignContent: "flex-start",
  },
  menuButtons: {
    textTransform: "none !important",
    justifyContent: "flex-start !important",
    fontSize: "0.8rem !important",
    color: "#4E4E4E !important",
    letterSpacing: "0.3rem !important",
  },
  menuText: {},
  icons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "10vh !important",
    justifyContent: "center",
    alignContent: "center",
  },
  svgIcon: {
    fill: "black !important",
  },
  left: {
    marginLeft: "5% !important",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    width: "40vh",
  },
  iconButton: {
    borderRadius: 0,
    disableFocusRipple: "false",
    disableRipple: "false",
    fill: "black !important",
  },
  madeBy: {
    display: "flex",
    flexDirection: "row",
    color: "black",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontSize: "0.5rem !important",
    textAlign: "right",
    width: "100%",
  },
  info: {
    marginRight: "5% !important",
    display: "flex",
    flexDirection: "column",
  },

  contactInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  intelliText: {
    marginBottom: "0.5rem",
    color: "#2F2F2F",
    letterSpacing: "0.25em",
  },
  adressText: {},
});

function Footer(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [menuTextFont, setMenuTextFont] = useState(
    props.isMobile ? "7px" : "14px"
  );
  const [svgIconSize, setsvgIconSize] = useState(
    props.isMobile ? "0.8rem" : "1.5rem"
  );
  const [intelliTextSize, setIntelliTextSize] = useState(
    props.isMobile ? "10px" : "20px"
  );
  const [adressTextSize, setAdressTextSize] = useState(
    props.isMobile ? "5px" : "10px"
  );
  const [madeBySize, setMadeBySize] = useState(
    props.isMobile ? "0.3rem" : "0.7rem"
  );
  const [menuMargin, setMenuMargin] = useState(props.isMobile ? "5%" : "10%");

  useEffect(() => {
    setMenuTextFont(props.isMobile ? "7px" : "14px");
    setsvgIconSize(props.isMobile ? "0.7rem" : "1.5rem");
    setIntelliTextSize(props.isMobile ? "10px" : "20px");
    setAdressTextSize(props.isMobile ? "5px" : "10px");
    setMadeBySize(props.isMobile ? "0.3rem" : "0.7rem");
    setMenuMargin(props.isMobile ? "5%" : "10%");
  }, [props.isMobile]);

  return (
    <div className={props.className}>
      <div className={classes.footer}>
        <div className={classes.left}>
          <div
            className={classes.menu}
            style={{
              marginLeft: `${menuMargin}`,
              marginRight: `${menuMargin}`,
            }}
          >
            <Button
              component={Link}
              to={"/about"}
              color="inherit"
              size="small"
              className={classes.menuButtons}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Typography
                className={classes.menuText}
                style={{ fontSize: `${menuTextFont}` }}
              >
                {t("o nas")}
              </Typography>
            </Button>
            <Button
              component={Link}
              to={"/career"}
              color="inherit"
              size="small"
              className={classes.menuButtons}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Typography
                className={classes.menuText}
                style={{ fontSize: `${menuTextFont}` }}
              >
                {t("kariera")}
              </Typography>
            </Button>
            <Button
              component={Link}
              to={"/contact"}
              color="inherit"
              size="small"
              className={classes.menuButtons}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Typography
                className={classes.menuText}
                style={{ fontSize: `${menuTextFont}` }}
              >
                {t("kontakt")}
              </Typography>
            </Button>
          </div>
          <div className={classes.icons}>
            <IconButton
              aria-label="insta"
              href={
                "https://instagram.com/intelli_automation?igshid=YmMyMTA2M2Y="
              }
              target="_blank"
              style={{ borderRadius: 0 }}
            >
              <InstagramIcon
                className={classes.svgIcon}
                style={{ fontSize: `${svgIconSize}` }}
              />
            </IconButton>
            <IconButton
              aria-label="face"
              href={"https://www.facebook.com/profile.php?id=100088184147780"}
              target="_blank"
              style={{ borderRadius: 0 }}
            >
              <FacebookIcon
                className={classes.svgIcon}
                style={{ fontSize: `${svgIconSize}` }}
              />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              href={"https://www.linkedin.com/company/intelliautomation/"}
              target="_blank"
              style={{ borderRadius: 0 }}
            >
              <LinkedInIcon
                className={classes.svgIcon}
                style={{ fontSize: `${svgIconSize}` }}
              />
            </IconButton>
          </div>
        </div>
        <div className={classes.info}>
          <Typography
            className={classes.intelliText}
            style={{ fontSize: `${intelliTextSize}` }}
          >
            INTELLI AUTOMATION SP. Z O.O.
          </Typography>
          <div className={classes.contactInfo}>
            <div
              style={{
                textAlign: "left",
                color: "#1E1E1E",
                fontSize: "15px",
                letterSpacing: "0.15em",
              }}
            >
              <Typography
                className={classes.adressText}
                style={{ fontSize: `${adressTextSize}` }}
              >
                UL. PODJAZD 1/2,
              </Typography>
              <Typography
                className={classes.adressText}
                style={{ fontSize: `${adressTextSize}` }}
              >
                81-805 SOPOT
              </Typography>
              <Typography
                className={classes.adressText}
                style={{ fontSize: `${adressTextSize}` }}
              >
                {t("POLSKA")}
              </Typography>
            </div>
            <div
              style={{
                textAlign: "left",
                color: "#7A7A7A",
                fontSize: "15px",
                letterSpacing: "0.15em",
              }}
            >
              <Typography
                className={classes.adressText}
                style={{ fontSize: `${adressTextSize}` }}
              >
                NIP : 5851499315
              </Typography>
              <Typography
                className={classes.adressText}
                style={{ fontSize: `${adressTextSize}` }}
              >
                KRS : 0001004360
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.madeBy} style={{ marginRight: "1%" }}>
        <div className={classes.madeBy}>
          <Typography style={{ fontSize: `${madeBySize}` }}>
            {/* {" "} */}
            Created by: &nbsp;
          </Typography>
          <a
            href="https://www.linkedin.com/in/piotr-drewek/"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography style={{ fontSize: `${madeBySize}` }}>
              {" "}
              Piotr Drewek
            </Typography>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
