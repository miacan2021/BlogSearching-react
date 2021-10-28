import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const CustomBtn = styled(Button)({
　　padding:'15px',
   borderColor: '#2D2D2B',
   color:'#2D2D2B',
   borderRadius: 0,
   letterSpacing: '1.5px',
   '&:hover': {
    borderColor: '#C39E9E',
    color:'#C39E9E',
   }
  });
export default function Btn(props) {
  return (
    <Box textAlign='center'>
      <CustomBtn variant="outlined">{props.name}</CustomBtn>
    </Box>
  );
}