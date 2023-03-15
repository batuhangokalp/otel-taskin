import React from "react";
import styled from "styled-components";
import HeaderInfo from "../components/GlobalComponents/HeaderInfoComponent";
import Header from "../components/GlobalComponents/HeaderComponent";
import Slider from "../components/HomePageComponents/SliderComponent";
import Rooms from "../components/HomePageComponents/RoomsComponent";
import Footer from "../components/GlobalComponents/FooterComponent";

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <HeaderInfo />
      <Header />
      <Slider />
      <Rooms />
      <Footer />
    </Container>
  );
}

export default Home;
