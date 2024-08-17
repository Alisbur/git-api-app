import React from "react";
import styles from "./DataField.module.scss"
import { Stack, Chip, Box } from "@mui/material";
import { RatingElement } from "../RatingElement/RatingElement";
import { RepoItem } from "../../shared/types";

interface DataFieldProps {
  itemData: RepoItem | undefined;
}

export const DataField = ({itemData} : DataFieldProps) => {

  return (
    <aside className={styles.container}>
      {itemData 
        ? (
          <Stack sx={{width: "100%", height: "100%"}}>
            <Box sx={{width: "100%"}}><p className={styles.title}>{itemData.name}</p></Box>
            <Stack direction="row" mt={2} sx={{width: "100%", justifyContent: "space-between", alignItems: "center"}}>
              {itemData.language 
                ? <Chip label={itemData.language } color="primary"/>
                : <p></p>
              }
              <RatingElement rating={itemData.stargazers_count} />
            </Stack>
            <Stack direction="row" mt={2} sx={{width: "100%", alignItems: "center", justifyContent: "start", flexWrap: "wrap", gap: "8px"}}>
              {itemData.topics?.map((chip, i) => <Chip key={i} label={chip} size="small"/>)}
            </Stack>
            <Box mt={3} sx={{width: "100%"}}><p className={styles.text}>{itemData.license ? itemData.license.name : 'Нет'}</p></Box>
          </Stack>
        )
        : <p className={styles.text}>Выберите репозитарий</p>
      }
    </aside>
  )
}