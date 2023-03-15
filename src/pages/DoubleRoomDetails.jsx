import React from "react";
import styled from "styled-components";
import { HeaderName } from "../pages/Rooms";
import HeaderInfo from "../components/GlobalComponents/HeaderInfoComponent";
import Header from "../components/GlobalComponents/HeaderComponent";
import Footer from "../components/GlobalComponents/FooterComponent";
import DoubleRoomComponent from "../components/RoomPageComponent/DoubleRoomComponent";

const Container = styled.div``;

function DoubleRoomDetails() {
  return (
    <>
      <HeaderInfo />
      <Header />
      <Container>
        <HeaderName>
          <h1>Double Oda</h1>
        </HeaderName>
        <DoubleRoomComponent />
      </Container>
      <Footer />
    </>
  );
}

export default DoubleRoomDetails;
