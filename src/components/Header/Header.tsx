import React, {useState} from "react";
import styles from "./Header.module.scss"
import { Stack, Button, TextField } from "@mui/material";

interface HeaderProps {
  querryTrigger: (arg1: string, arg2: boolean) => void;
  active: boolean;
}

export const Header = ({querryTrigger, active} : HeaderProps) => {
  const [searchString, setSearchString] = useState<string>('');

  return (
    <div className={styles.container}>
      <Stack 
        sx={{height: "100%", width: "70%"}}
        direction="row"
        spacing={1}
      >
        <TextField 
          variant="outlined" 
          placeholder="Введите поисковый запрос" 
          fullWidth
          InputProps={{ style: {height: "42px", backgroundColor: "white"}}}
          value={searchString}
          autoComplete="off"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchString(event.target.value)
          }}
        />        
        <Button 
          variant="contained" 
          style={{width: "105px", height: "42px"}} 
          disableElevation 
          disabled={!searchString.length || !active}
          onClick={()=>{
            querryTrigger(searchString, false)
          }}>Искать</Button>
      </Stack>
    </div>
  );
}