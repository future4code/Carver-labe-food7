import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./routes/Router";
import theme from "./constants/theme";
import SplashScreen from "./components/SplashScreem/SplashScreem";
import GlobalStyle from './global/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      {SplashScreen}
      <Router/>
    </ThemeProvider>
  );
}

export default App;
