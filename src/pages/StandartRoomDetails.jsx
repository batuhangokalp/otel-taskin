import React from "react";
import styled from "styled-components";
import { HeaderName } from "../pages/Rooms";
import HeaderInfo from "../components/GlobalComponents/HeaderInfoComponent";
import Header from "../components/GlobalComponents/HeaderComponent";
import Footer from "../components/GlobalComponents/FooterComponent";
import StandartRoomComponent from "../components/RoomPageComponent/StandartRoomComponent";

const Container = styled.div``;
function StandartRoomDetails() {
  return (
    <>
      <HeaderInfo />
      <Header />
      <Container>
        <HeaderName>
          <h1>Standart Oda</h1>
        </HeaderName>
        <StandartRoomComponent />
      </Container>
      <Footer />
    </>
  );
}

export default StandartRoomDetails;
