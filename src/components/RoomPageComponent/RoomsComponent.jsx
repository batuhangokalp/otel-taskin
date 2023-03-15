import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const RoomsDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-bottom: -1.5rem;
`;
const RoomDiv = styled.div`
  justify-content: space-around;
  display: flex;
  width: 70%;
  flex-direction: row;
  margin-bottom: 5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #d1d0cf;
  & img:hover {
    opacity: 1;
    transform: translate(-10px);
    transition: all 0.3s ease-in-out;
    -webkit-transform: translate(0px, 5px);
    cursor: pointer;
    box-shadow: 4px 4px 4px #606060;
  }
  @media only screen and (max-width: 958px) {
    flex-direction: column;
  }
`;

const ImageDiv = styled.img`
  width: 20rem;
  opacity: 0.8;
  @media only screen and (max-width: 958px) {
    margin: auto;
    width: 100%;
  }
`;

const InfoDiv = styled.div`
  background-color: #fff;
  margin: auto;
  width: 85%;

  & h5 {
    margin-top: 1.5rem;
    margin-left: 2rem;

    font-family: "Nunito", sans-serif;
    font-weight: 700;
    color: #606060;
    letter-spacing: 0.04rem;
  }
  & p {
    color: #858a99;
    background: #fff;
    font-family: lato, sans-serif;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 0.2px;
    margin-left: 2rem;
  }
  @media only screen and (max-width: 958px) {
    flex-direction: column;
    width: 100%;
  }
`;

const RoomsButton = styled.button`
  align-items: center;
  text-align: center;
  font-size: 12px;
  line-height: 1.7rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
  margin-top: 4rem;
  color: #fff;
  background-color: #deb666;
  border-radius: 15px;
  border: none;
  margin-left: 1rem;
  &:hover {
    background-color: #fff;
    color: #deb666;
  }
`;

function RoomsComponent() {
  return (
    <RoomsDiv>
      <RoomDiv>
        <Link to="/standartRoom">
          <ImageDiv src={"./pictures/standart.JPG"}></ImageDiv>
        </Link>
        <InfoDiv>
          <h5>Standart Oda</h5>
          <p>Tek kişiler için uygun olarak tasarlanmış Standart odamız</p>
          <Link to="/reservation/standartRoom">
            <RoomsButton>
              REZERVASYON <ArrowForwardIosIcon fontSize="small" />
            </RoomsButton>
          </Link>
          <Link to="/standartRoom">
            <RoomsButton>
              DETAYLI BİLGİ <ArrowForwardIosIcon fontSize="small" />
            </RoomsButton>
          </Link>
        </InfoDiv>
      </RoomDiv>
      <RoomDiv>
        <Link to="/doubleRoom">
          <ImageDiv src={"./pictures/double.JPG"}></ImageDiv>
        </Link>
        <InfoDiv>
          <h5>Double Oda</h5>
          <p>İki kişilik ihtiyaçlar için tasarlanmış Double odamız</p>
          <Link to="/reservation/doubleRoom">
            <RoomsButton>
              REZERVASYON <ArrowForwardIosIcon fontSize="small" />
            </RoomsButton>
          </Link>
          <Link to="/doubleRoom">
            <RoomsButton>
              DETAYLI BİLGİ <ArrowForwardIosIcon fontSize="small" />
            </RoomsButton>
          </Link>
        </InfoDiv>
      </RoomDiv>
      <RoomDiv>
        <Link to="/tripleRoom">
          <ImageDiv src={"./pictures/triple.JPG"}></ImageDiv>
        </Link>
        <InfoDiv>
          <h5>Triple Oda</h5>
          <p>
            Üç ve daha fazla kişilik ihtiyaçlar için tasarlanmış Triple odamız
          </p>
          <Link to="/reservation/tripleRoom">
            <RoomsButton>
              REZERVASYON <ArrowForwardIosIcon fontSize="small" />
            </RoomsButton>
          </Link>
          <Link to="/tripleRoom">
            <RoomsButton>
              DETAYLI BİLGİ <ArrowForwardIosIcon fontSize="small" />
            </RoomsButton>
          </Link>
        </InfoDiv>
      </RoomDiv>
    </RoomsDiv>
  );
}

export default RoomsComponent;
