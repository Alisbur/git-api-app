import React, {useState, useLayoutEffect} from 'react';
import styles from "./App.module.scss"
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { TableField } from '../TableField/TableField';
import { DataField } from '../DataField/DataField';
import { Loader } from '../Loader/Loader';
import { useLazyGetResultsQuery } from '../../redux/api/searchApi';
import { RepoItem } from '../../shared/types';
import { normalizeFetchedResults } from '../../shared/helpers';

function App() {
  const [isFirstSearch, setIsFirstSearch] = useState(true);
  const [searchResult, setSearchResult] = useState<RepoItem[] | []>([]);
  const [selectedItem, setSelectedItem] = useState<RepoItem | undefined>();
  const [trigger, {data, isError, isFetching}] = useLazyGetResultsQuery();
  
  useLayoutEffect(()=>{
    const normalizedResults = data?.items
      ? normalizeFetchedResults(data?.items) 
      : [];
    if(data) {
      setIsFirstSearch(false);
      setSearchResult(normalizedResults);
      setSelectedItem(undefined);
    }
  }, [data])

  const selectItem = (id: number) => {
    const selectedItemData = searchResult?.find((item) => item.id === id);
    if(selectedItemData) {
      setSelectedItem(selectedItemData);
    }
  }

  if(isFetching) {
    return (
      <div className={styles.app}>
        <Header querryTrigger={trigger} active={!isFetching}/>
        <Loader />
        <Footer />
      </div>
    )
  } else if (isError) {
    return (
      <div className={styles.app}>
        <Header querryTrigger={trigger} active={!isFetching}/>
        <p className={styles.greetingText}>{"Что-то пошло не так..."}</p>
        <Footer />
      </div>
    )    
  } else {
    return (
      <div className={styles.app} >
        <Header querryTrigger={trigger} active={true}/>
        {isFirstSearch || searchResult.length === 0
        ? <p className={styles.greetingText}>{
            isFirstSearch 
              ? "Добро пожаловать" 
              : "Нет совпадений"
          }
          </p>
        : (
            <div className={styles.pageContainer}>
              <TableField reps={searchResult} selectItem={selectItem} />
              <DataField itemData={selectedItem} />
            </div>
          )
        }
        <Footer />
      </div>
    );
  }
}

export default App;
