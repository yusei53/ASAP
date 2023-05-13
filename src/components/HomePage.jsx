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
        <TestWrapper>
          <Test />
        </TestWrapper>
      </SBox>
    </SBDiv>
  );
};

const SBDiv = styled.div`
  height: 100vh;
  background-color: #e6f9f8;
`;

const SBox = styled.div`
  margin-top: 2%;
  background-color: white;
  width: 40%;
  margin-left: 25%; /* 左側のマージンを50% - (ボックス幅の半分) に設定 */
  padding: 4%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const TestWrapper = styled.div``;
