import styled from "styled-components";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";

const Container = styled.div`
  max-width: 1400px;
  height: 100vh;
  width: 100vw;

  justify-content: center;
  align-items: center;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  background-size: cover;
  background-position: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  //Remove default margin from body element
  document.body.style.margin = "0";
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
