import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Article from './Article';

const CustomTitle = styled(Typography)({
    color: '#A8A194',
    fontFamily: 'Zen Maru Gothic',
    fontSize: '40px',
    fontWeight: 'bold',
  });

const Articles = (props => {
   return(
       <>
    <CustomTitle gutterBottom variant="h1" component="div">
      {props.title}
      </CustomTitle>
    <Grid container spacing={2}>
    <Article posts={props.posts} id={props.id} />
    </Grid>
       </>
   )
})

export default Articles