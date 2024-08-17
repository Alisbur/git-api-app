import React, {useState, useEffect} from 'react';
import styles from "./App.module.scss"
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { TableField } from '../TableField/TableField';
import { DataField } from '../DataField/DataField';
import { useLazyGetResultsQuery } from '../../redux/api/searchApi';
import { RepoItem } from '../../shared/types';
import { normalizeFetchedResults } from '../../shared/helpers';

function App() {
  const [isFirstSearch, setIsFirstSearch] = useState(true);
  const [searchResult, setSearchResult] = useState<RepoItem[] | []>([]);
  const [selectedItem, setSelectedItem] = useState<RepoItem | undefined>();
  const [trigger, {fetchedResult}] = useLazyGetResultsQuery({
    selectFromResult: ({data}) => ({
      fetchedResult: data?.items,
    })
  });
  
  useEffect(()=>{
    if(fetchedResult?.length) {
      const normalizeResults = normalizeFetchedResults(fetchedResult);
      setSearchResult(normalizeResults);
      setIsFirstSearch(false);
      setSelectedItem(undefined);
    }
  }, [fetchedResult])

  const selectItem = (id: number) => {
    const selectedItemData = searchResult?.find((item) => item.id === id);
    if(selectedItemData) {
      setSelectedItem(selectedItemData);
    }
  }

  return (
    <div className={styles.app}>
      <Header querryTrigger={trigger}/>
      {isFirstSearch
      ? <p className={styles.greetingText}>Добро пожаловать</p>
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

export default App;
