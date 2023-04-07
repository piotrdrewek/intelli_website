import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography, Box } from "@mui/material";
import about1 from "../img/about1.png";
import about2 from "../img/about2.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles({
  content2: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line3 / c-line1 / r-line4 / c-line3",
    background: "rgba(128, 128, 128, 0) !important",
    height: "100vh",
  },
  half2: {
    height: "100vh",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  header1: {
    width: "80%",
    color: "#FFCF40",
    letterSpacing: "0.15em",
    textAlign: "left",
    marginLeft: "20% !important",
  },
  text1: {
    color: "#000000",
    letterSpacing: "0.05em",
    textAlign: "left",
    marginLeft: "20% !important",
    marginRight: "10% !important",
  },
  photo: {},
});

export default function Page2(props) {
  const { t } = useTranslation();
  const classes = useStyles();
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
    <Paper className={classes.content2}>
      <div className={classes.half2} style={{ backgroundColor: "white" }}>
        {" "}
        <Typography
          className={classes.header1}
          style={{ fontSize: `${header1Size}` }}
        >
          {t("Nasza praca")}
        </Typography>
        <Typography
          className={classes.text1}
          style={{ fontSize: `${text1Size}` }}
        >
          {t(
            "Zajmujemy się całym procesem produkcyjnym związanym z dostarczeniem w pełni funkcjonalnego systemu automatyki, wspierającego funkcjonowanie magazynów, zakładów produkcyjnych i centrów dystrybucyjnych."
          )}
        </Typography>
        <Box
          component="img"
          className={classes.photo}
          style={{ height: `${photoHeight}`, width: `${photoWidth}` }}
          alt="Your logo."
          src={about1}
        />
      </div>
      <div className={classes.half2} style={{ backgroundColor: "white" }}>
        <Box
          component="img"
          className={classes.photo}
          style={{ height: `${photoHeight}`, width: `${photoWidth}` }}
          alt="Your logo."
          src={about2}
        />
        <Typography
          className={classes.header1}
          style={{ fontSize: `${header1Size}` }}
        >
          {t("Nasza misja")}
        </Typography>
        <Typography
          className={classes.text1}
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
