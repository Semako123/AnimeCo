import React, { Component } from 'react'
import {AppBar, ToolBar, Toolbar, Typography} from '@mui/material'

class Navbar extends Component {
    render() {
        return (
            <>
            <AppBar position="fixed">
              <Toolbar>
                <Typography variant="h6">
                  Appbar
                </Typography>
              </Toolbar>
            </AppBar>
            </>
        );
        
    }
}

export default Navbar;

