import  Nav  from './Nav';
import Btn from './Button';
import Content from './Content';
import HeroImg from '../assets/img/hero.png';
import styled from "styled-components";
import { Link as Scroll } from 'react-scroll';


const Hero = () =>{
const HeroSction = styled.div`
    width: 100wh;
    height: 100vh;
    background-color: #F0E4D8;
`;
    return(
        <HeroSction>
            <Nav title={'FIND BLOG POSTS'}/>
           <Content 
           title={'You can find articles written in Japanese about life as an International student in Vancouver.'} 
           contents={'"the study of scarlet" is a blog for Japanese students studying in Vancouver. On this website, you can easily find blog posts on "the study of scarlet".'}
           img={HeroImg} />
            <Scroll to="find"> <Btn name={'TRY TO FIND ARTICLES'} /></Scroll>
        </HeroSction>
       
    )
}

export default Hero;