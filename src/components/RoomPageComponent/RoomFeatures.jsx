import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import CleanHandsOutlinedIcon from "@mui/icons-material/CleanHandsOutlined";

const MoreDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1290px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 958px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`;

function RoomFeatures() {
  return (
    <MoreDetails>
      <ListGroup>
        <ListGroupItem style={{ width: "20rem", color: "#606060" }}>
          <ShowerOutlinedIcon></ShowerOutlinedIcon> Banyo/Duş
        </ListGroupItem>
        <ListGroupItem style={{ width: "20rem", color: "#606060" }}>
          <AcUnitOutlinedIcon></AcUnitOutlinedIcon> Klima
        </ListGroupItem>
        <ListGroupItem style={{ width: "20rem", color: "#606060" }}>
          <TvOutlinedIcon></TvOutlinedIcon> Televizyon
        </ListGroupItem>
        <ListGroupItem style={{ width: "20rem", color: "#606060" }}>
          <WifiOutlinedIcon></WifiOutlinedIcon> İnternet
        </ListGroupItem>
      </ListGroup>
      <ListGroup>
        <ListGroupItem style={{ width: "20rem", color: "#606060" }}>
          <StorefrontOutlinedIcon></StorefrontOutlinedIcon> Kafeterya
        </ListGroupItem>
        <ListGroupItem style={{ width: "20rem", color: "#606060" }}>
          <RoomServiceOutlinedIcon></RoomServiceOutlinedIcon> Oda Servisi
        </ListGroupItem>
        <ListGroupItem style={{ width: "20rem", color: "#606060" }}>
          <CleanHandsOutlinedIcon></CleanHandsOutlinedIcon> Sıcak Su
        </ListGroupItem>
        <ListGroupItem style={{ width: "20rem", color: "#606060" }}>
          <LocalFireDepartmentOutlinedIcon></LocalFireDepartmentOutlinedIcon>{" "}
          Saç Kurutma Makinesi
        </ListGroupItem>
      </ListGroup>
    </MoreDetails>
  );
}

export default RoomFeatures;
