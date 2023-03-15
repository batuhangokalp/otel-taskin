import React from "react";
import HeaderInfo from "../components/GlobalComponents/HeaderInfoComponent";
import Header from "../components/GlobalComponents/HeaderComponent";
import Footer from "../components/GlobalComponents/FooterComponent";
import styled from "styled-components";
import RoomsComponent from "../components/RoomPageComponent/RoomsComponent";

const Container = styled.div``;

export const HeaderName = styled.div`
  height: 8rem;
  background-color: #f5f3f0;
  & h1 {
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    color: #606060;
    padding-left: 2rem;
    padding-top: 2rem;
  }
`;

function Rooms() {
  return (
    <>
      <HeaderInfo />
      <Header />
      <Container>
        <HeaderName>
          <h1>Odalar</h1>
        </HeaderName>
        <RoomsComponent />
      </Container>
      <Footer />
    </>
  );
}

export default Rooms;
