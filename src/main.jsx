import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.scss"
import { LanguageContextProvider } from './context/useContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageContextProvider>
    <App />
    </LanguageContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
