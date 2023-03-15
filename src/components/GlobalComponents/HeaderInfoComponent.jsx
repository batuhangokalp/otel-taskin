import React from "react";
import styled from "styled-components";
import MdPhone from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Chip, ListItemButton } from "@mui/material";

const InfoDiv = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  color: #858a99;
  font-size: 16px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  & p:hover {
    font-size: 18px;
    font-weight: bold;
    color: #c12200;
  }
`;
const ContactDiv = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
`;
function HeaderInfo() {
  return (
    <InfoDiv>
      <p>
        <i>Taşkın Otel'e hoş geldiniz</i>
      </p>
      <ContactDiv>
        <ListItemButton component="a" href="tel:02847141706">
          <Chip icon={<MdPhone />} size={"small"} label="0284 714 1706" />
        </ListItemButton>
        <ListItemButton component="a" href="mailto:info@oteltaskin.com">
          <Chip
            icon={<EmailIcon />}
            size={"small"}
            label="info@oteltaskin.com"
          />
        </ListItemButton>
      </ContactDiv>
    </InfoDiv>
  );
}

export default HeaderInfo;
