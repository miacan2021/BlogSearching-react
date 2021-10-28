import styled from "styled-components"

const Content = (props) =>{

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
        <>
            <Flex>
            < HeroImage src={props.img} alt="hero-img" />
            <InBox>
             <Title>{props.title}</Title>
             <Para>{props.contents}</Para>
             </InBox>
             </Flex>
        </>
    )
}

export default Content;