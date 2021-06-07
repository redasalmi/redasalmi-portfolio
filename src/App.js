import { useReducer, useEffect } from 'react';
import { initialState, ThemeDispatch, reducer } from './reducer';
import Main from './components/Main';

function App() {
  const [theme, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const prevClass = document.body.className;
    if (prevClass && prevClass !== theme.theme) {
      document.body.classList.remove(prevClass);

      // adding transition effect after theme initialization
      const body = document.querySelector('body');
      if (!body.style.transition) {
        body.style.transition = 'color 0.3s, background-color 0.5s';
      }
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
