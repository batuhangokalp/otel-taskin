import React from "react";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";

const SliderDiv = styled.div`
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 5rem;
  background-color: #fbfbfb;
  margin-bottom: 5rem;
`;

const ImageDiv = styled.img`
  width: 40%;
  margin: auto;
  padding: auto;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

function Slider() {
  return (
    <SliderDiv>
      <Slide {...properties}>
        <ImageDiv src={"./pictures/oda1.JPG"} />
        <ImageDiv src={"./pictures/oda2.JPG"} />
        <ImageDiv src={"./pictures/standart.JPG"} />
        <ImageDiv src={"./pictures/double.JPG"} />
        <ImageDiv src={"./pictures/triple.JPG"} />
      </Slide>
    </SliderDiv>
  );
}

export default Slider;
