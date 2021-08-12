import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../assets/theme';
import { Counter } from './components/counter/Counter';

// import Nav from './components/Nav';
const App = () => {

  return (
    <>
   <ThemeProvider theme={theme}>
      <div>hello world!</div>
      <Counter />
    </ThemeProvider>
    </>
  );
};
export default App;
