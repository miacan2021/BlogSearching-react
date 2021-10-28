import  Nav  from './Nav';
import Btn from './Button';
import HeroImg from '../assets/img/hero.png';
import styled from "styled-components"

const Hero = () =>{
const HeroSction = styled.div`
    width: 100wh;
    height: 100vh;
    background-color: #F0E4D8;
`;
const Title = styled.h1`
    color: #2D2D2B;
    font-size:30px;
    width:25vw;
`;
const Para = styled.p`
    color: #2D2D2B;
    font-size:16px;
    width:15vw;
    margin-top: 10px;
`

const HeroImage = styled.img`
    height: 60vh;
    width: auto;
`
const Flex = styled.div`
    height: 70vh;
    display:flex;
    justify-content: center;
    align-items: center;
`
const InBox = styled.div`
    display:flex;
    flex-direction: column;
`

    return(
        <HeroSction>
            <Nav />
            <Flex>
            < HeroImage src={HeroImg} alt="hero-img" />
            <InBox>
             <Title>You can find articles written in Japanese about life as an International student in Vancouver.</Title>
             <Para>‘the study of scarlet’ is a blog for Japanese students studying in Vancouver.
                 On this website, you can easily find blog posts on 'the study of scarlet'.
            </Para>
             </InBox>
             </Flex>
             <Btn name={'TRY TO FIND ARTICLES'} />
        </HeroSction>
       
    )
}

export default Hero;