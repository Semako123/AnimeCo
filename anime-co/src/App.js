import React from 'react';
import Navbar from './components/navbar/navbar'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import { CssBaseline, alpha } from '@mui/material'
import Footer from './components/footer/footer';
import {amber, grey, deepOrange, pink} from '@mui/material/colors'
import Main from './components/main/main'


const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: pink,
          divider:deepOrange[700],
          background: {
            default: grey[900],
            paper: alpha(grey[800], 0.2),
          },
          text: {
            primary: pink[100],
            secondary: grey[500],
          },
        }),
  },
});

const dark_theme = createTheme(getDesignTokens('dark'))

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={dark_theme}>
    <CssBaseline/>
      <Navbar/>
      <Main/>
      <Footer/>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
