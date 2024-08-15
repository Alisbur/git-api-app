import React, {useState, useEffect} from "react";
import styles from "./Header.module.scss"
import { Stack, Button, TextField } from "@mui/material";
import { useLazyGetResultsQuery } from "../../redux/api/searchApi";
import { RepoItem } from "../../shared/types";

export const Header = () => {
  const [searchString, setSearchString] = useState<string>('');
  const [searchResult, setSearchResult] = useState<any>(null);
  const [trigger, results] = useLazyGetResultsQuery();

  useEffect(()=>{
    console.log(searchString);
  }, [searchString])

  useEffect(()=>{
    console.log(results.data);
  }, [results])


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
          onClick={()=>{
            trigger(searchString, false)
          }}>Искать</Button>
      </Stack>
    </div>
  );
}