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
    });

const CustomCard = styled(Card)({
   backgroundColor:'#F6F0F1',
   height: '310px',
   width: '220px',
   borderRadius:0,

  });

const CustomTypo = styled(Typography)({
    color: '#C39E9E',
    textDecoration: 'none',
    fontFamily: 'Zen Maru Gothic',
    fontSize: '16px',
    fontWeight: 'bold',
  });
  const CustomGrid = styled(Grid)({
    marginTop: '10px',
  })
  const CustomP = styled(Typography)({
    color:'#C39E9E',
    fontFamily: 'M PLUS 1p , sans-serif',
    fontSize: '12px',
  })
const Article = (props => {
  
   return(
       <>
    <CustomGrid container spacing={1}>
        {props.posts.map((post, index) => (
    <Grid item xs={12} md={6} lg={4} key={index}>
     <Grow
    in={props.checked}
    style={{ transformOrigin: '0 0 0' }}
    {...(props.checked ? { timeout: 90 } : {})}
  >
    <CustomCard>
      <CardActionArea>
        <a href={post.link} style={{textDecoration: 'none'}} target="_blank" rel="noreferrer noopener">
        <CardMedia
          component="img"
          height="120"
          image={post._embedded['wp:featuredmedia'][0].source_url}
          alt="article-img"
        />
        <CustomCardContent>
        {post.title.rendered.length <= 35 ?
        <CustomTypo gutterBottom variant="h5" component="div">{post.title.rendered}</CustomTypo> : 
         <CustomTypo gutterBottom variant="h5" component="div">{post.title.rendered.slice(0,25)+"…"}</CustomTypo>
         }
          <CustomP variant="body2" color="text.secondary">
           ≈
            {parse(post.content.rendered.slice(0,50)+"…")}
          </CustomP>
        </CustomCardContent>
        </a>
      </CardActionArea>
    </CustomCard>
    </Grow>
    </Grid>
       ))}
       </CustomGrid>
       </>
   )
})

export default Article