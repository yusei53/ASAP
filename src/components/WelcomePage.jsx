import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Header } from "./Header";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const WelcomeContainer = styled.div`
  animation: ${fadeIn} 1s ease;

  /* Your existing styles */
  background-color: #e6f9f8;
  background-size: cover;
  background-position: center;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const TextOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #e6f9f8;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeOut} 1s ease 1s forwards;
`;

const Text = styled.div`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
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

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const AnimatedWelcomeContainer = styled(WelcomeContainer)`
  animation: ${slideIn} 1s ease;
`;

export const WelcomePage = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <WelcomeContainer>
      {showText && (
        <TextOverlay>
          <Text>メールを書く時間すらも惜しんでしまうあなたへ</Text>
        </TextOverlay>
      )}
      {!showText && (
        <>
          <AnimatedWelcomeContainer>
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
                <StyledLink to="/company">
                  <Button>企業、会社(例:内定、インターン内定辞退)</Button>
                </StyledLink>
              </ButtonContainer>
            </Container>
          </AnimatedWelcomeContainer>
        </>
      )}
    </WelcomeContainer>
  );
};
