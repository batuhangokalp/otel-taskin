import React from "react";
import styled from "styled-components";

const MapDiv = styled.div`
  width: 50%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 958px) {
    width: 100%;
    height: 30rem;
    margin-top: 5rem;
  }
`;

function MapComponent() {
  return (
    <MapDiv>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.724803791078!2d26.628160715732513!3d40.8559654367317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b3c64872ebd92f%3A0x6853c5e0304d7b0f!2zVGHFn2vEsW4gT3RlbA!5e0!3m2!1str!2str!4v1677226659064!5m2!1str!2str"
        height="100%"
        width="450rem"
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        title="Taşkın Otel"
      />
    </MapDiv>
  );
}

export default MapComponent;
