import { createContext } from 'react';

const initialState = {
  theme: localStorage.getItem('theme') ?? 'light',
};

const ThemeDispatch = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'light':
      return { theme: 'light' };
    case 'dark':
      return { theme: 'dark' };
    default:
      return state;
  }
};

export { initialState, ThemeDispatch, reducer };
