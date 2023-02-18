import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import home_background4 from "../img/home_background4.png";

const useStyles = makeStyles({
  content6: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridArea: "r-line7 / c-line1 / r-line8 / c-line3",
    backgroundColor: "#cccccc !important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    height: "85vh",
  },

  half6: {
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Page6(props) {
  const classes = useStyles();
  return (
    <Paper
      className={classes.content6}
      style={{
        backgroundImage: `url(${home_background4})`,
      }}
    >
      <div className={classes.half6} style={{ width: "60%" }}></div>
      <div className={classes.half6} style={{ width: "40%" }}>
        <Typography
          style={{
            color: "#FFCF40",
            fontSize: "25px",
            letterSpacing: "0.15em",
          }}
        >
          SKONTAKTUJ SIĘ Z NAMI
        </Typography>
        <Typography
          style={{
            color: "#000000",
            fontSize: "30px",
            letterSpacing: "0.25em",
            marginTop: "10%",
            marginBottom: "5%",
          }}
        >
          BIURO@INTELLI.COM.PL
        </Typography>
        <Typography
          style={{
            color: "#000000",
            fontSize: "30px",
            letterSpacing: "0.15em",
          }}
        >
          (+48) 607 683 704
        </Typography>
      </div>
    </Paper>
  );
}
