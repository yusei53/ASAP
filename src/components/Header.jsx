import styled, { keyframes } from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SString>A P</SString>
    </SHeader>
  );
};

const SHeader = styled.div`
  background: linear-gradient(0deg, #1c97a0, #09a1d7);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SString = styled.div`
  font-family: "Montserrat", sans-serif; /* フォントの指定 */
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
  font-size: 70px;
  padding: 1% 0;
  animation: ${fadeIn} 1s ease-in-out; /* アニメーションの適用 */
`;
