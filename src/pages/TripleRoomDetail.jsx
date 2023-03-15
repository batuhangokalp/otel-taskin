import React from "react";
import styled from "styled-components";
import { HeaderName } from "../pages/Rooms";
import HeaderInfo from "../components/GlobalComponents/HeaderInfoComponent";
import Header from "../components/GlobalComponents/HeaderComponent";
import Footer from "../components/GlobalComponents/FooterComponent";
import TripleRoomComponent from "../components/RoomPageComponent/TripleRoomComponent";

const Container = styled.div``;
function TripleRoomDetail() {
  return (
    <>
      <HeaderInfo />
      <Header />
      <Container>
        <HeaderName>
          <h1>Triple Oda</h1>
        </HeaderName>
        <TripleRoomComponent />
      </Container>
      <Footer />
    </>
  );
}

export default TripleRoomDetail;
