import React from "react";
import styles from "./DataField.module.scss"
import { Stack, Chip, Box } from "@mui/material";
import { RatingElement } from "../RatingElement/RatingElement";

interface DataFieldProps {
  name?: string;
  language?: string;
  chips?: string[];
  rating?: number;
  version?: string;
}

const mockChips = ["Python", "cli", "ARV", "Data", "Python1", "cli1", "ARV1", "Data1", "Python2", "cli2", "ARV2", "Data2"];

export const DataField = ({name = "Regggggggggggggggggggggggggggggggggggggggggggggpo", language = "Python", chips = mockChips, rating = 9080000, version = "GPL-3.0 license"} : DataFieldProps) => {
  return (
    <aside className={styles.container}>
      {name 
        ? (
          <Stack sx={{width: "100%", height: "100%"}}>
            <Box sx={{width: "100%"}}><p className={styles.title}>{name}</p></Box>
            {/* <Box sx={{maxWidth: "100%", fontSize: "32px", fontWeight: "400", lineHeight: "40px", overflow: "hidden", textOverflow: "ellipsis"}}>{name}</Box> */}
            <Stack direction="row" mt={2} sx={{width: "100%", justifyContent: "space-between", alignItems: "center"}}>
              <Chip label={language} color="primary"/>
              <RatingElement rating={rating} />
            </Stack>
            <Stack direction="row" mt={2} sx={{width: "100%", alignItems: "center", justifyContent: "start", flexWrap: "wrap", gap: "8px"}}>
              {chips?.map((chip, i) => <Chip key={i} label={chip} size="small"/>)}
            </Stack>
            <Box mt={3} sx={{width: "100%"}}><p className={styles.text}>{version}</p></Box>
          </Stack>
        )
        : <p className={styles.text}>Выберите репозитарий</p>
      }
    </aside>
  )
}