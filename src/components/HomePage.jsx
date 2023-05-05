import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Test } from "./Test";

export const HomePage = () => {
  return (
    <SDiv>
      <SBox>
        <TestWrapper>
          <Test />
        </TestWrapper>
      </SBox>
    </SDiv>
  );
};

const SDiv = styled.div`
  height: 100vh;
  background-color: #e6f9f8;
  padding-top: 3%;
`;

const SBox = styled.div`
  background-color: white;
  width: 40%;
  margin-left: 25%; /* 左側のマージンを50% - (ボックス幅の半分) に設定 */
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const TestWrapper = styled.div``;
