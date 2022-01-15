import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Router from './Routes/Router';
import theme from './Constants/theme';
import SplashScreen from './Components/SplashScreem/SplashScreem';
import GlobalStyle from './Global/GlobalStyle';




function App() {
  return (
    <ThemeProvider theme={theme}>
        {SplashScreen}
      
      <Router/>
        
   <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
