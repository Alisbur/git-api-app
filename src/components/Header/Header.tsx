import React, {useState, useEffect} from "react";
import styles from "./Header.module.scss"
import { Stack, Button, TextField } from "@mui/material";

interface HeaderProps {
  querryTrigger: (arg1: string, arg2: boolean) => void;
}

export const Header = ({querryTrigger} : HeaderProps) => {
  const [searchString, setSearchString] = useState<string>('');

  useEffect(()=>{
    console.log(searchString);
  }, [searchString])

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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchString(event.target.value)
          }}
        />        
        <Button 
          variant="contained" 
          style={{width: "105px", height: "42px"}} 
          disableElevation 
          disabled={!searchString.length}
          onClick={()=>{
            querryTrigger(searchString, false)
          }}>Искать</Button>
      </Stack>
    </div>
  );
}