import { createContext, useState } from 'react';

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState([
    {
      id: 1,
      theme: 'light',
    },
  ]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
