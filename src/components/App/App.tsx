import React from 'react';
import styles from "./App.module.scss"
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Page } from '../Page/Page';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
