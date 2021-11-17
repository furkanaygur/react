import React, { useState } from 'react';
import { ThemeContext } from './context/Theme';
import LoginForm from './components/LoginForm';
import './style.css';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const data = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={data}>
      <LoginForm />
    </ThemeContext.Provider>
  );
};

export default App;
