import React from 'react';
import './App.css';
import ResponsiveDrawer from './components/drawer/drawer';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const dark_theme = createTheme(
  {
    palette:{mode:'dark',}
  },
)


function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={dark_theme}>
    <CssBaseline/>
      <ResponsiveDrawer/>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
