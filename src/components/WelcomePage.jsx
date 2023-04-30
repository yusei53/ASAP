import React from "react";
import { TemMessage } from "./TemMessage";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WelcomePage = (props) => {
  return (
    <>
      <SDiv>
        <LeftElement>
          <SInput placeholder="大学" />
          <SInput placeholder="大学" />
          <SInput placeholder="大学" />
          <SInput placeholder="大学" />
          <SLink to="/home">{props.children}</SLink>
        </LeftElement>
        <RightElement>
          <TemMessage />
        </RightElement>
      </SDiv>
    </>
  );
};

const SDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
  background-color: #e6f9f8;
`;

const SInput = styled.input`
  color: red;

  margin-bottom: 10%;
`;

const SLink = styled(Link)`
  display: block;
  margin-left: 50%;
`;

const LeftElement = styled.div`
  width: 50%;
`;

const RightElement = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
