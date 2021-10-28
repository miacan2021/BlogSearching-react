import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const CustomNav = styled(AppBar)({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    textAlign:'center',
  });
const CustomTypo = styled(Typography)({
    fontFamily:'Roboto',
    letterSpacing: '1.5px',
    color: '#2D2D2B',
    fontSize: '30px',
    marginTop: '30px',
  });
  
const Nav = (props) =>{
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomNav position="static">
        <Toolbar>
          <CustomTypo variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {props.title}
          </CustomTypo>
        </Toolbar>
      </CustomNav>
    </Box>
  );
}

export default Nav;