import React from "react";
import styled from "styled-components";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-bottom: 4rem;
  margin-top: 1rem;
`;

const ImagesDiv = styled.div`
  width: 80%;
`;

const images = [
  "pictures/oda1.jpg",
  "pictures/oda2.jpg",
  "pictures/standart.jpg",
  "pictures/double.jpg",
  "pictures/triple.jpg",
];

function GallerySlide() {
  return (
    <Container>
      <ImagesDiv>
        <Zoom scale={0.2} duration={3000}>
          {images.map((each, index) => (
            <img
              alt="otel,room,oda"
              key={index}
              style={{ width: "100%" }}
              src={each}
            />
          ))}
        </Zoom>
      </ImagesDiv>
    </Container>
  );
}

export default GallerySlide;
