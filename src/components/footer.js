import React from "react";
import { Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import styles from "../css/footer.module.css";

function Footer(props) {
  const { t } = useTranslation();
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
    props.isMobile ? "0.3rem" : "5px"
  );
  const [menuMargin, setMenuMargin] = useState(props.isMobile ? "5%" : "10%");
  const [footerMarginTop, setFooterMarginTop] = useState(
    props.isMobile ? "5%" : "0%"
  );

  useEffect(() => {
    setMenuTextFont(props.isMobile ? "7px" : "14px");
    setsvgIconSize(props.isMobile ? "0.7rem" : "1.5rem");
    setIntelliTextSize(props.isMobile ? "10px" : "20px");
    setAdressTextSize(props.isMobile ? "5px" : "10px");
    setMadeBySize(props.isMobile ? "0.3rem" : "0.7rem");
    setMenuMargin(props.isMobile ? "5%" : "10%");
    setFooterMarginTop(props.isMobile ? "5%" : "0%");
  }, [props.isMobile]);

  return (
    <div className={props.className}>
      <div
        className={styles.footer}
        style={{ marginTop: `${footerMarginTop}` }}
      >
        <div className={styles.footerLeft}>
          <div
            className={styles.footerMenu}
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
              className={styles.footerMenuButtons}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Typography style={{ fontSize: `${menuTextFont}` }}>
                {t("o nas")}
              </Typography>
            </Button>
            <Button
              component={Link}
              to={"/career"}
              color="inherit"
              size="small"
              className={styles.footerMenuButtons}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Typography style={{ fontSize: `${menuTextFont}` }}>
                {t("kariera")}
              </Typography>
            </Button>
            <Button
              component={Link}
              to={"/contact"}
              color="inherit"
              size="small"
              className={styles.footerMenuButtons}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Typography style={{ fontSize: `${menuTextFont}` }}>
                {t("kontakt")}
              </Typography>
            </Button>
          </div>
          <div className={styles.footerIcons}>
            <IconButton
              aria-label="insta"
              href={
                "https://instagram.com/intelli_automation?igshid=YmMyMTA2M2Y="
              }
              target="_blank"
              style={{ borderRadius: 0 }}
            >
              <InstagramIcon
                className={styles.footerSvgIcon}
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
                className={styles.footerSvgIcon}
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
                className={styles.footerSvgIcon}
                style={{ fontSize: `${svgIconSize}` }}
              />
            </IconButton>
          </div>
        </div>
        <div className={styles.footerInfo}>
          <Typography
            className={styles.footerIntelliText}
            style={{ fontSize: `${intelliTextSize}` }}
          >
            INTELLI AUTOMATION SP. Z O.O.
          </Typography>
          <div className={styles.footerContactInfo}>
            <div
              style={{
                textAlign: "left",
                color: "#1E1E1E",
                fontSize: "15px",
                letterSpacing: "0.15em",
              }}
            >
              <Typography style={{ fontSize: `${adressTextSize}` }}>
                UL. PODJAZD 1/2,
              </Typography>
              <Typography style={{ fontSize: `${adressTextSize}` }}>
                81-805 SOPOT
              </Typography>
              <Typography style={{ fontSize: `${adressTextSize}` }}>
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
              <Typography style={{ fontSize: `${adressTextSize}` }}>
                NIP : 5851499315
              </Typography>
              <Typography style={{ fontSize: `${adressTextSize}` }}>
                KRS : 0001004360
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerMadeBy} style={{ marginRight: "1%" }}>
        <div className={styles.footerMadeBy}>
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
