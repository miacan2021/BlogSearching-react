import { useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import parse from "html-react-parser";

const CustomCardContent = styled(CardContent)({
    padding: '10px',
    overflow: 'hidden',
  });

const CustomTypo = styled(Typography)({
    color: '#A8A194',
    textDecoration: 'none',
    fontFamily: 'Zen Maru Gothic',
    fontSize: '20px',
    fontWeight: 'bold',
  });
const CustomTitle = styled(Typography)({
    color: '#A8A194',
    fontFamily: 'Zen Maru Gothic',
    fontSize: '40px',
    fontWeight: 'bold',
  });

const Articles = (props) => {
    const [posts, setPosts] = useState([])
    const [url, setUrl] = useState(props.url)
    const [title, setTitle] = useState(props.title)
  useEffect(() => {
    async function loadPosts() {
    const response = await fetch(`${url}`)
    if(!response) {
        return;
    }
    const posts = await response.json()
    setPosts(posts)
    setTitle(props.title)
    setUrl(props.url)
}
    loadPosts();
});

   return(
       <>
    <CustomTitle gutterBottom variant="h1" component="div">
      New Articles
      {title}
      </CustomTitle>
    <Grid container spacing={2}>
    {posts.map((post, index) => (
    <Grid item xs={12} md={6} lg={4} key={index}>
    <Card sx={{ maxWidth: 400, maxHeight: 550 }}>
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
    </Card>
    </Grid>
       ))}
       </Grid>
       </>
   )
}

export default Articles