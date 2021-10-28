import  Nav  from './Nav';
import Btn from './Button';
import ContentAbout from './ContentAbout';
import AboutImg from '../assets/img/about.png';
import styled from "styled-components"

const AboutMe = () =>{
const Sction = styled.div`
    width: 100wh;
    height: 100vh;
    background-color: #F6F0F1;
`;
    return(
        <Sction>
            <Nav title={'ABOUT ME'} />
           <ContentAbout 
           title={'SHIHO'} 
           contents={'I am a Japanese international student living in Vancouver, studying web development.I run a blog to share tips and information about life as an international student in Vancouver for Japanese people who are living or planning to live in Vancouver.My blog has a 6K page view a month now. I would like to say, I am a blogger.'}
           img={AboutImg} />
             <Btn name={'TRY TO FIND ARTICLES'} />
        </Sction>
    
    )
}

export default AboutMe