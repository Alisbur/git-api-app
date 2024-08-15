import React from "react";
import { Stack } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import styles from "./RatingElement.module.scss"

interface RatingElementProps {
  rating?: number;
}

export const RatingElement = ({rating = 0} : RatingElementProps) => {
  return (
    <Stack direction="row" spacing={1} sx={{alignItems: "center"}}>
      <StarIcon sx={{color: "#FFB400"}}/>
      <p className={styles.ratingValue}>{rating.toLocaleString()}</p>
    </Stack>
  );
}