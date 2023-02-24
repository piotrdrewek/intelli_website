import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
const fonts = {
  menuText: "14px !important",
  svgIcon: "1.5rem !important",
  intelliText: "20px !important",
  adressText: "10px !important",
};
if (isMobile) {
  fonts.menuText = "28px !important";
  fonts.svgIcon = "3rem !important";
  fonts.intelliText = "30px !important";
  fonts.adressText = "20px rem !important";
}

const useStyles = makeStyles({
  menu: {
    marginLeft: "10% !important",
    marginRight: "10% !important",
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
  menuText: {
    fontSize: fonts.menuText,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "10vh !important",
    justifyContent: "center",
    alignContent: "center",
  },
  svgIcon: {
    fontSize: fonts.svgIcon,
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
    justifyContent: "flex-start",
    alignItems: "flex-end",
    fontSize: "0.5rem !important",
    textAlign: "right",
    minHeight: "15vh",
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
    fontSize: fonts.intelliText,
    marginBottom: "0.5rem",
    color: "#2F2F2F",
    letterSpacing: "0.25em",
  },
  adressText: {
    fontSize: fonts.adressText,
  },
});

function Footer(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={props.className}>
      <div className={classes.left}>
        <div className={classes.menu}>
          <Button
            component={Link}
            to={"/about"}
            color="inherit"
            size="small"
            className={classes.menuButtons}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Typography className={classes.menuText}>{t("o nas")}</Typography>
          </Button>
          <Button
            component={Link}
            to={"/career"}
            color="inherit"
            size="small"
            className={classes.menuButtons}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Typography className={classes.menuText}>{t("kariera")}</Typography>
          </Button>
          <Button
            component={Link}
            to={"/contact"}
            color="inherit"
            size="small"
            className={classes.menuButtons}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Typography className={classes.menuText}>{t("kontakt")}</Typography>
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
            <InstagramIcon className={classes.svgIcon} />
          </IconButton>
          <IconButton
            aria-label="face"
            href={"https://www.facebook.com/profile.php?id=100088184147780"}
            target="_blank"
            style={{ borderRadius: 0 }}
          >
            <FacebookIcon className={classes.svgIcon} />
          </IconButton>
          <IconButton
            aria-label="linkedin"
            href={"https://www.linkedin.com/company/intelliautomation/"}
            target="_blank"
            style={{ borderRadius: 0 }}
          >
            <LinkedInIcon className={classes.svgIcon} />
          </IconButton>
        </div>
      </div>
      <div className={classes.info}>
        <Typography className={classes.intelliText}>
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
            <Typography className={classes.adressText}>
              UL. PODJAZD 1/2,
            </Typography>
            <Typography className={classes.adressText}>81-805 SOPOT</Typography>
            <Typography className={classes.adressText}>
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
            <Typography className={classes.adressText}>
              NIP : 5851499315
            </Typography>
            <Typography className={classes.adressText}>
              KRS : 0001004360
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.madeBy} style={{ marginRight: "1%" }}>
        <div className={classes.madeBy}>
          <Typography style={{ fontSize: "0.7rem" }}>
            {/* {" "} */}
            Created by: &nbsp;
          </Typography>
          <a
            href="https://www.linkedin.com/in/piotr-drewek/"
            // className={classes.menuButtons}
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography style={{ fontSize: "0.7rem" }}>
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
