import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../assets/theme';

import Nav from './components/Nav';
const App = () => {
  const [storage, setStorage] = useState('');

  const onClick = () => {
    localStorage.setItem('key', 'hohohaha');
    console.log('local:', localStorage.getItem('key'));
  };

  // amplify-test-1

  return (
    <>
    <ThemeProvider theme={theme}>
      <div>hello world!</div>
      <button onClick={onClick}>button</button>
      <Nav />
    </ThemeProvider>
    </>
  );
};
export default App;
