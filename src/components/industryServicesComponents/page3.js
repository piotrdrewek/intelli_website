import React from "react";
import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "../../css/industryServices/page3.module.css";

export default function Page3(props) {
  const { t } = useTranslation();
  const [header1Size, setHeader1Size] = useState(
    props.isMobile ? "18px" : "36px"
  );
  const [textSize, setTextSize] = useState(props.isMobile ? "12px" : "24px");
  useEffect(() => {
    setHeader1Size(props.isMobile ? "18px" : "36px");
    setTextSize(props.isMobile ? "12px" : "24px");
  }, [props.isMobile]);

  return (
    <Paper className={styles.page3Content} style={{ backgroundColor: "white" }}>
      <div>
        <Typography
          className={styles.page3Header1}
          style={{
            marginTop: "5%",
            textAlign: "left",
            fontSize: `${header1Size}`,
          }}
        >
          {t("KONCEPCJA")}
        </Typography>
        <Typography
          className={styles.page3Text1}
          style={{ fontSize: `${textSize}` }}
        >
          {t(
            "Doradztwo w zakresie określenia potrzeb klienta dotyczących możliwości optymalizacji procesów poprzez dobranie odpowiedniego typu systemu automatycznego"
          )}
        </Typography>
      </div>
      <div>
        <Typography
          className={styles.page3Header1}
          style={{
            textAlign: "right",
            fontSize: `${header1Size}`,
          }}
        >
          {t("PROJEKT")}
        </Typography>
        <Typography
          className={styles.page3Text1}
          style={{ fontSize: `${textSize}` }}
        >
          {t(
            "Posiadamy odpowiednie kompetencje oraz zasoby umożliwiające przeprowadzenie kompleksowego procesu projektowego systemu."
          )}
        </Typography>
      </div>
      <div>
        <Typography
          className={styles.page3Header1}
          style={{
            textAlign: "left",
            fontSize: `${header1Size}`,
          }}
        >
          {t("SZAFY STEROWNICZE")}
        </Typography>
        <Typography
          className={styles.page3Text1}
          style={{ fontSize: `${textSize}` }}
        >
          {t(
            "Na podstawie schematów elektrycznych przeprowadzamy kompleksową prefabrykacje szaf sterowniczych."
          )}
        </Typography>
      </div>
      <div>
        <Typography
          className={styles.page3Header1}
          style={{
            textAlign: "right",
            fontSize: `${header1Size}`,
          }}
        >
          {t("MONTAŻ")}
        </Typography>
        <Typography
          className={styles.page3Text1}
          style={{
            marginBottom: "5%",
            fontSize: `${textSize}`,
          }}
        >
          {t(
            "Instalacja tras kablowych, przez montaż oraz połączenie szaf sterowniczych, monitoringu CCTV, systemów sieciowych aż po wykonanie pomiarów elektrycznych."
          )}
        </Typography>
      </div>
    </Paper>
  );
}
