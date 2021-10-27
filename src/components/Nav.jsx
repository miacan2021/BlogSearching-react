import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';


const CustomNav = styled(AppBar)({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: '#fff',
  });

const CustomButton = styled(Button)({
  color: '#fff',
  '&:hover': {
    color:'pink',
}
})

const Nav = () =>{
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomNav position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Explore My Blog
          </Typography>
          <CustomButton href={"https://s-scarlet.com/"} target="_blank" color="inherit">See my blog</CustomButton>
        </Toolbar>
      </CustomNav>
    </Box>
  );
}

export default Nav;