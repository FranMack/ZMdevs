import React, { createContext, useState } from "react";

const initialLanguage = "english";

const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "spanish" ? "english" : "spanish"
    );
  };

  const value = {
    language,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageContextProvider };
