import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
height: 100vh;
 scroll-snap-align: center;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;

`;

const Container = styled.div`
height: 100vh;
 scroll-snap-align: center;
 width: 1300px;
 display: flex;
 justify-content: space-between;
`;

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 5px;
`;
const Title = styled.h1`
font-size: 74px;

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
`;
const Desc = styled.p`
font-size: 20px;
color: lightgray;
margin-bottom: 20px; 
`;
const Button = styled.button`
background-color: #a00f0f;
color: white;
font-weight: 500;
width: 100px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
margin: 20px;

`;


const Right = styled.div`
flex: 3;
display: flex;
justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 50%;
  position: relative;
`;


const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }
`;


const Hero = () => {
  return (
  <Section>
    <Navbar />
    <Container>
        <Left>
            <Title>Dream. Think. Create.</Title>
            <WhatWeDo>
                <Line src ="./img/line.png"/>
                <Subtitle>Explore Beyond Your Imagination</Subtitle>
            </WhatWeDo>
            <Desc>
                I enjoy creating meaningful contents for digital experiences.
                <Button>Learn More </Button>
            </Desc>
        </Left>
        <Right>
            {/* 3d Model */}
            <ImageContainer>
            <Img src="./img/pragesh2.png" alt="3D Model" />
          </ImageContainer>
          <ImageContainer>
            <Img src="./img/pragesh.png" alt="Moon" />
          </ImageContainer>
          <ImageContainer>
            <Img src="./img/pragesh3.png" />
          </ImageContainer>
            </Right>
    </Container>
  </Section>
  )      
};

export default Hero;
