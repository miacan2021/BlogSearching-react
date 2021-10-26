import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';


const CustomNav = styled(AppBar)({
    backgroundColor: '#ecd5dc',
    color: 'white'
  });

export default function Nav() {
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
          <Button href={"https://s-scarlet.com/"} target="_blank" color="inherit">See my blog</Button>
        </Toolbar>
      </CustomNav>
    </Box>
  );
}