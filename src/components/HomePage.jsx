import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Test } from "./Test";
import { Header } from "./Header";

export const HomePage = () => {
  return (
    <SBDiv>
      <Header />
      <SBox>
        <Test />
      </SBox>
    </SBDiv>
  );
};

const SBDiv = styled.div`
  height: 100vh;
  background-color: #e6f9f8;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @media (max-width: 600px) {
    overflow-y: scroll;
  }
`;

const SBox = styled.div`
  background-color: white;
  width: 40%;
  padding: 4%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  margin-top: 25px;
`;
