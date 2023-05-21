import React from "react";
import  styled  from "styled-components";


const Section = styled.div`
height: 100vh;
 scroll-snap-align: center;
 display: flex;
 justify-content: center;

`;

const Container = styled.div`
height: 100vh;
 scroll-snap-align: center;
 width: 1300px;
 display: flex;
 justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
`;

const Right = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 10px;
`;
const Title = styled.h1`
font-size: 74px;
margin-bottom: 10px;

`;
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const Line = styled.img`
height: 3px;
`;
const Subtitle = styled.h2`
color: #a00f0f;
font-weight: 500;
margin-bottom: 10px;
`;
const Desc = styled.p`
font-size: 20px;
color: lightgray;
margin-bottom: 10px;

`;
const Button = styled.button`
background-color: #a00f0f;
color: white;
font-weight: 500;
width: 120px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
display: flex;



`;


const Who = () => {
  return (
  <Section>
    <Container>
        <Left>
            {/* 3d Model */}  
        </Left>
        <Right>
            <Title>Think outside the box</Title>
            <WhatWeDo>
                <Line src ="./img/line.png"/>
                <Subtitle>Who we are </Subtitle>
            </WhatWeDo>
            <Desc>
                Get creative group of Designers and Developers with a passion for the arts.
                <Button> See our Works </Button>
            </Desc>
            
            </Right>
    </Container> 
  </Section>
  )      
};

export default Who;
