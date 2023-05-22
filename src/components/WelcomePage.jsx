import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export const WelcomePage = () => {
  return (
    <>
      <SBDiv>
        <Header />
        <Container>
          <Link to="/home">
            <Button>休む</Button>
          </Link>
        </Container>
      </SBDiv>
    </>
  );
};

const SBDiv = styled.div`
  background-color: #e6f9f8;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #fca311;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
`;
