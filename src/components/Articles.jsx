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

const Articles = () => {
    const [posts, setPosts] = useState([]);
    // const url = 'https://s-scarlet.com/wp-json/wp/v2/posts?_embed'
    useEffect(() => {
    async function loadPosts() {
    const response = await fetch('https://s-scarlet.com/wp-json/wp/v2/posts?_embed&filter[posts_per_page]=1');
    if(!response) {
        return;
    }
    const posts = await response.json();
    setPosts(posts);
}
    loadPosts();
},[]);


   return(
       <>
    <h1>Articles</h1>
    <Grid container spacing={2}>
    {posts.map((post, index) => (
    <Grid item xs={12} md={6} lg={4}>
    <Card sx={{ maxWidth: 400, maxHeight: 550 }}  key={index}>
      <CardActionArea>
        <a href={post.link} style={{textDecoration: 'none'}} target="_blank" rel="noreferrer noopener">
        <CardMedia
          component="img"
          height="140"
          image={post._embedded['wp:featuredmedia'][0].source_url}
          alt="article-img"
        />
        <CustomCardContent>
          <CustomTypo gutterBottom variant="h5" component="div">
        {post.title.rendered.length <= 35 ?
         <p>{post.title.rendered}</p> : 
         <p>{post.title.rendered.slice(0,30)+"…"}</p>}
          </CustomTypo>
          <Typography variant="body2" color="text.secondary">
        <p>{post.date}</p>
        <p>{parse(post.content.rendered.slice(0,50)+"…")}</p>
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