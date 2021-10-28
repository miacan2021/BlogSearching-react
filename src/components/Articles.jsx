import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Article from './Article';

const CustomTitle = styled(Typography)({
    color: '#2D2D2B',
    fontFamily: 'M PLUS 1p',
    fontSize: '30px',
  });

const Articles = (props => {
   return(
       <>
    <CustomTitle gutterBottom variant="h1" component="div">
      {props.title}
      </CustomTitle>
    <Grid container spacing={2}>
    <Article posts={props.posts} checked={props.checked} />
    </Grid>
       </>
   )
})

export default Articles