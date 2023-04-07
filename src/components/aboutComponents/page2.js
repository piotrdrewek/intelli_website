import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import about1 from "../img/about1.png";
import about2 from "../img/about2.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../../css/about/page2.module.css";

export default function Page2(props) {
  const { t } = useTranslation();
  const [header1Size, setHeader1Size] = useState(
    props.isMobile ? "21px" : "42px"
  );
  const [text1Size, setText1Size] = useState(props.isMobile ? "10px" : "21px");
  const [photoHeight, setPhotoHeight] = useState(
    props.isMobile ? "161px" : "323px"
  );
  const [photoWidth, setPhotoWidth] = useState(
    props.isMobile ? "146px" : "292px"
  );
  useEffect(() => {
    setHeader1Size(props.isMobile ? "21px" : "42px");
    setText1Size(props.isMobile ? "10px" : "21px");
    setPhotoWidth(props.isMobile ? "161px" : "323px");
    setPhotoHeight(props.isMobile ? "146px" : "292px");
  }, [props.isMobile]);

  return (
    <Paper className={styles.page2Content}>
      <div className={styles.page2Half} style={{ backgroundColor: "white" }}>
        {" "}
        <Typography
          className={styles.page2Header1}
          style={{ fontSize: `${header1Size}` }}
        >
          {t("Nasza praca")}
        </Typography>
        <Typography
          className={styles.page2Text1}
          style={{ fontSize: `${text1Size}` }}
        >
          {t(
            "Zajmujemy się całym procesem produkcyjnym związanym z dostarczeniem w pełni funkcjonalnego systemu automatyki, wspierającego funkcjonowanie magazynów, zakładów produkcyjnych i centrów dystrybucyjnych."
          )}
        </Typography>
        <Box
          component="img"
          style={{ height: `${photoHeight}`, width: `${photoWidth}` }}
          alt="Your logo."
          src={about1}
        />
      </div>
      <div className={styles.page2Half} style={{ backgroundColor: "white" }}>
        <Box
          component="img"
          style={{ height: `${photoHeight}`, width: `${photoWidth}` }}
          alt="Your logo."
          src={about2}
        />
        <Typography
          className={styles.page2Header1}
          style={{ fontSize: `${header1Size}` }}
        >
          {t("Nasza misja")}
        </Typography>
        <Typography
          className={styles.page2Text1}
          style={{
            fontSize: `${text1Size}`,
            marginBottom: "5%",
          }}
        >
          {t(
            "Dostarczanie klientom najwyższych standardów jakości w branży, z innowacyjnymi rozwiązaniami, opartymi na profesjonalizmie i doświadczeniu naszego zespołu."
          )}
        </Typography>
      </div>
    </Paper>
  );
}
