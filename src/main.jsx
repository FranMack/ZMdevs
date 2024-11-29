import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.scss"
import { LanguageContextProvider,ScreenSizeContextProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageContextProvider>
      <ScreenSizeContextProvider>
    <App />
    </ScreenSizeContextProvider>
    </LanguageContextProvider>
    
    </BrowserRouter>
  </React.StrictMode>,
)
