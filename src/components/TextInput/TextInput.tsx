import { TextField } from "@mui/material";
import styles from "./TextInput.module.scss"

export const TextInput = () => {
  return (
    <>
      <TextField 
        variant="outlined" 
        placeholder="Введите поисковый запрос" 
        fullWidth
        InputProps={{ style: {height: "42px", backgroundColor: "white"}}}
      /> 
    </>
  );
}