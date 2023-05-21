import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  
`;

const Links = styled.div`
  display: flex;
  align-items: flex-start; /* Adjusted to align items at the start */
  gap: 50px;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  object-fit: contain; 
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
cursor: pointer;
`;

const Icon = styled.img`
width: 20px;

`;


const Icons = styled.div`
display: flex;
  align-items: flex-start; /* Adjusted to align items at the start */
  gap: 20px;
  cursor: pointer;
`;


const Button = styled.button`
width: 100px;
padding: 10px;
background-color: #a00f0f;
color: white;
cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" alt="Logo" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" alt="Search Icon" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
