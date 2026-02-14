import { createContext, useState } from "react";

const screenSizeContextDefaultValue = {
  screenWidth: window.innerWidth,
  setScreenWidth: () => {},
};

export const ScreenSizeContext = createContext(screenSizeContextDefaultValue);

export const ScreenSizeContextProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const value = {
    screenWidth,
    setScreenWidth,
  };

  return (
    <ScreenSizeContext.Provider value={value}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
