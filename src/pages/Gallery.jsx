import React from "react";
import styled from "styled-components";
import { HeaderName } from "../pages/Rooms";
import HeaderInfo from "../components/GlobalComponents/HeaderInfoComponent";
import Header from "../components/GlobalComponents/HeaderComponent";
import Footer from "../components/GlobalComponents/FooterComponent";
import GallerySlide from "../components/GalleryPageComponents/GallerySlide";

const Container = styled.div``;
function Gallery() {
  return (
    <>
      <HeaderInfo />
      <Header />
      <Container>
        <HeaderName>
          <h1>Galeri</h1>
        </HeaderName>
        <GallerySlide />
      </Container>
      <Footer />
    </>
  );
}

export default Gallery;
