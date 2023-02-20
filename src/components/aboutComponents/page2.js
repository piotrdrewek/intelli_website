import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography, Box } from "@mui/material";
import about1 from "../img/about1.png";
import about2 from "../img/about2.png";
import { useTranslation } from "react-i18next";

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
});

export default function Page2(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  return (
    <Paper className={classes.content2}>
      <div className={classes.half2} style={{ backgroundColor: "white" }}>
        {" "}
        <Typography
          style={{
            width: "80%",
            color: "#FFCF40",
            fontSize: "42px",
            letterSpacing: "0.15em",
            textAlign: "left",
            marginLeft: "20%",
          }}
        >
          {t("Nasza praca")}
        </Typography>
        <Typography
          style={{
            color: "#000000",
            fontSize: "21px",
            letterSpacing: "0.05em",
            textAlign: "left",
            marginLeft: "20%",
            marginRight: "10%",
          }}
        >
          {t(
            "Zajmujemy się całym procesem produkcyjnym związanym z dostarczeniem w pełni funkcjonalnego systemu automatyki, wspierającego funkcjonowanie magazynów, zakładów produkcyjnych i centrów dystrybucyjnych."
          )}
        </Typography>
        <Box
          component="img"
          sx={{
            height: "323px",
            width: "292px",
          }}
          alt="Your logo."
          src={about1}
        />
      </div>
      <div className={classes.half2} style={{ backgroundColor: "white" }}>
        <Box
          component="img"
          sx={{
            height: "323px",
            width: "292px",
          }}
          alt="Your logo."
          src={about2}
        />
        <Typography
          style={{
            width: "80%",
            color: "#FFCF40",
            fontSize: "42px",
            letterSpacing: "0.15em",
            textAlign: "left",
            marginLeft: "20%",
          }}
        >
          {t("Nasza misja")}
        </Typography>
        <Typography
          style={{
            color: "#000000",
            fontSize: "21px",
            letterSpacing: "0.05em",
            textAlign: "left",
            marginLeft: "20%",
            marginRight: "10%",
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
