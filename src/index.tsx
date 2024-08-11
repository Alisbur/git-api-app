import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
