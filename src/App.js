import React, { useReducer, useEffect } from "react";
import { initialState, ThemeDispatch, reducer } from "./reducer";
import Main from "./components/Main";

function App() {
  const [theme, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const prevClass = document.body.className;
    if (prevClass) {
      document.body.classList.remove(prevClass);
    }
    document.body.classList.add(theme.theme);
  }, [theme.theme]);

  return (
    <ThemeDispatch.Provider value={{ theme, dispatch }}>
      <Main />
    </ThemeDispatch.Provider>
  );
}

export default App;
