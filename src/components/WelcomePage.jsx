import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export const WelcomePage = () => {
  return (
    <SBDiv>
      <Header />
      <Container>
        <Text>どこにメールを送るのか選択してね！</Text>
        <ButtonContainer>
          <StyledLink to="/university">
            <Button>大学(例:講義欠席)</Button>
          </StyledLink>
          <StyledLink to="/part-time">
            <Button>バイト(例:バイト欠席、遅刻)</Button>
          </StyledLink>
          <StyledLink to="/part-time">
            <Button>企業、会社(例:内定、インターン内定辞退)</Button>
          </StyledLink>
        </ButtonContainer>
      </Container>
    </SBDiv>
  );
};

const SBDiv = styled.div`
  background-color: #e6f9f8;
  background-size: cover;
  background-position: center;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
`;

const Button = styled.button`
  background-color: #fca311;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ff7c03;
  }
`;

const Text = styled.div`
  font-size: 36px;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  margin-bottom: 20px;
`;
