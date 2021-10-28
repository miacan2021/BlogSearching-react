import styled from "styled-components"

const ContentAbout = (props) =>{

const Title = styled.h1`
    color: #2D2D2B;
    font-size:30px;
`;
const Para = styled.p`
    color: #2D2D2B;
    font-size:16px;
    width:20vw;
    max-width: 350px;
    margin-top: 10px;
    text-aline: center;
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
    align-items: center;
    margin-right: 20px;
`

    return(
            <Flex>
            <InBox>
             <Title>{props.title}</Title>
             <Para>{props.contents}</Para>
             </InBox>
             < HeroImage src={props.img} alt="hero-img" />
             </Flex>
    )
}

export default ContentAbout;