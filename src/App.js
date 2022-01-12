import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Router from './Routes/Router';
import theme from './Constants/theme';

function App() {
  return (
    <div>
      <Router/>
    </div>
  );
}

export default App;
