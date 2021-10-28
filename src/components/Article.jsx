import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import parse from "html-react-parser";
import Grow from '@mui/material/Grow';

const CustomCardContent = styled(CardContent)({
    padding: '10px',
    overflow: 'hidden',
  });
const CustomCard = styled(Card)({
   backgroundColor:'orange',
  });

const CustomTypo = styled(Typography)({
    color: '#A8A194',
    textDecoration: 'none',
    fontFamily: 'Zen Maru Gothic',
    fontSize: '20px',
    fontWeight: 'bold',
  });

const Article = (props => {
  
   return(
       <>
      <Grid container spacing={2}>
        {props.posts.map((post, index) => (
    <Grid item xs={12} md={6} lg={4} key={index}>
     <Grow
    in={props.checked}
    style={{ transformOrigin: '0 0 0' }}
    {...(props.checked ? { timeout: 90 } : {})}
  >
    <CustomCard sx={{ maxWidth: 350, maxHeight: 400 }}>
      <CardActionArea>
        <a href={post.link} style={{textDecoration: 'none'}} target="_blank" rel="noreferrer noopener">
        <CardMedia
          component="img"
          height="140"
          image={post._embedded['wp:featuredmedia'][0].source_url}
          alt="article-img"
        />
        <CustomCardContent>
        {post.title.rendered.length <= 35 ?
        <CustomTypo gutterBottom variant="h5" component="div">{post.title.rendered}</CustomTypo> : 
         <CustomTypo gutterBottom variant="h5" component="div">{post.title.rendered.slice(0,30)+"…"}</CustomTypo>
         }
          <Typography variant="body2" color="text.secondary">
            {post.date}
            {parse(post.content.rendered.slice(0,70)+"…")}
          </Typography>
        </CustomCardContent>
        </a>
      </CardActionArea>
    </CustomCard>
    </Grow>
    </Grid>
       ))}
       </Grid>
       </>
   )
})

export default Article