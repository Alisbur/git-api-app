import React from "react";
import styles from "./Header.module.scss"
import { TextInput } from "../TextInput/TextInput";
import { SearchButton } from "../SearchButton/SearchButton";
import { Box } from "@mui/material";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Box 
        height="100%"
        width="70%"
        display="flex"
        alignItems="center"
        gap="8px"
      >
        <TextInput />
        <SearchButton />
      </Box>
    </div>
  );
}