import React, { useEffect, useState } from "react";

const ThemeContext = React.createContext({
  lightMode: false,
  onChange: () => {},
});

export const ThemeContextProvider = (props) => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
  //there will be some localStorage
  }, [lightMode]);

  const switchModeHandler = () => {
    if (lightMode === false) {
      setLightMode(true);
    }
    if (lightMode === true) {
      setLightMode(false);
    }
  };
  return (
    <ThemeContext.Provider
      value={{ lightMode: lightMode, onChange: switchModeHandler }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
