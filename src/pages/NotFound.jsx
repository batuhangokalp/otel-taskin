import React from "react";
import styled from "styled-components";
import HeaderInfo from "../components/GlobalComponents/HeaderInfoComponent";
import Header from "../components/GlobalComponents/HeaderComponent";
import Footer from "../components/GlobalComponents/FooterComponent";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-bottom: 15rem;
  margin-top: 5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f4f4;
  & h1 {
    margin-bottom: 30px;
    font-family: "Nunito", sans-serif;
    font-size: 150px;
    text-align: center;
    font-weight: 700;
    color: #deb666;
    line-height: 1.5;
  }
  & h2 {
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    color: #606060;
  }
  @media only screen and(max-width:958px) {
  }
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
    background-color: #f7f4f4;
    color: #deb666;
  }
`;
function NotFound() {
  return (
    <>
      <HeaderInfo />
      <Header />
      <Container>
        <Content>
          <h1>404</h1>
          <h2>SAYFA BULUNAMADI</h2>
          <Link to="/">
            <RoomsButton>Ana Sayfaya Dön</RoomsButton>
          </Link>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default NotFound;
