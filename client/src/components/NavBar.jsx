import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img style={{height:"30px"}} src={logo} alt="" />
            </IconButton>
            <Typography style={{fontWeight:"bolder",fontFamily:"monospace"}} variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Students
            </Typography>
            <Link to={'/add-student'} style={{color:"white"}}>
            <Button style={{fontWeight:"bolder"}} color="inherit">Add Student</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default NavBar;
