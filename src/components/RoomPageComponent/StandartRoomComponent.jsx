import React from "react";
import styled from "styled-components";
import RoomFeatures from "./RoomFeatures";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 10rem;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 958px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & img:hover {
    opacity: 1;
    transform: translate(-20px);
    transition: all 0.6s ease-in-out;
    -webkit-transform: translate(0px, 20px);
    cursor: pointer;
    box-shadow: 20px 20px 20px #606060;
  }
`;

const InfoDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h4 {
    font-size: 1.6rem;
    color: #606060;
    font-family: "Nunito", sans-serif;
  }
`;

const RoomImage = styled.img`
  width: 30rem;
  opacity: 0.8;
`;

const RoomsButton = styled.button`
  align-items: center;
  text-align: center;
  font-size: 14px;
  line-height: 2rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  margin-top: 3rem;
  color: #fff;
  background-color: #deb666;
  border-radius: 0px;
  border: none;
  width: 20rem;
  &:hover {
    background-color: #fff;
    color: #deb666;
  }
`;

function StandartRoomComponent() {
  return (
    <Container>
      <RoomImage src={"./pictures/standart.JPG"}></RoomImage>
      <InfoDiv>
        <h4>Oda Özellikleri</h4>
        <RoomFeatures />
        <Link to="/reservation/standartRoom">
          <RoomsButton>
            REZERVASYON OLUŞTUR <ArrowForwardIosIcon fontSize="small" />
          </RoomsButton>
        </Link>
      </InfoDiv>
    </Container>
  );
}

export default StandartRoomComponent;
