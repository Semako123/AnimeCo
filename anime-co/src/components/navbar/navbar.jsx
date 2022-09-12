import { Toolbar, AppBar, Typography, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { Component } from "react";
import logo from "../images/logo.png";

class Navbar extends Component {
  render() {
    return (
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <img
            src={logo}
            alt="Logo of AnimeCo"
            style={{ height: "55px", marginLeft: "-30px" }}
          />
          <Typography
            variant="h5"
            color="inherit"
            sx={{ fontSize: { xs: 20, md: 25 }, ml: "-20px" }}
          >
            AnimeCo
          </Typography>
          <IconButton sx={{ ml: "auto" }}>
            <Search
              color="secondary"
              sx={{ fontSize: { xs: 20, md: 25, lg: 30 } }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}
export default Navbar;
