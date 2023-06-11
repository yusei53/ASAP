import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export const WelcomePage = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 2800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <WelcomeContainer>
      {showText && (
        <TextOverlay>
          <Text>メールを書く時間すらも惜しんでしまうあなたへ</Text>
          <SText>
            メールを書く時間すらも
            <br />
            惜しんでしまうあなたへ
          </SText>
        </TextOverlay>
      )}
      {!showText && (
        <AnimatedWelcomeContainer>
          <Header />
          <Container>
            <Text>送信先を選択しよう！</Text>
            <ButtonContainer>
              <StyledLink to="/university">
                <Button>大学[講義欠席]</Button>
              </StyledLink>
              <StyledLink to="/part-time">
                <Button>バイト[バイト欠席・遅刻]</Button>
              </StyledLink>
              <StyledLink to="/company">
                <Button>企業[インターン内定・内定辞退]</Button>
              </StyledLink>
            </ButtonContainer>
          </Container>
        </AnimatedWelcomeContainer>
      )}
    </WelcomeContainer>
  );
};

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
  margin: 0 auto;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-top: 3%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SText = styled.div`
  display: none;
  @media (max-width: 768px) {
    margin-top: 10%;
    font-size: 30px;
    display: block;
    margin: 0 auto;
    font-weight: bold;
    text-align: center;
  }
`;

const Container = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  margin-top: 4%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr));
  gap: 50px;
  @media (max-width: 768px) {
    margin-top: 7%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
`;

const Button = styled.button`
  width: 400px;
  background-color: #fca311;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
  line-height: 3;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: 0.5s all;

  &:hover {
    background-color: #ff7c03;
    transform: scale(1.2, 1.2);
    transition: 0.5s all;
  }

  @media (max-width: 768px) {
    width: 333px;
    font-size: 18px;
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
