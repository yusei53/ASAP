import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TemMessage } from "./TemMessage";

export const WelcomePage = () => {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <SDiv>
      <LeftElement>
        <form>
          <SInput
            name="university"
            placeholder="大学"
            value={inputValues.university || ""}
            onChange={handleInputChange}
          />
          <SInput
            name="lesson"
            placeholder="授業"
            value={inputValues.lesson || ""}
            onChange={handleInputChange}
          />
          <SInput
            name="date"
            placeholder="日付"
            value={inputValues.date || ""}
            onChange={handleInputChange}
          />
          <SInput
            name="name"
            placeholder="自分の名前"
            value={inputValues.name || ""}
            onChange={handleInputChange}
          />
          <Link
            to={{
              pathname: "/home",
              search: `?university=${inputValues.university || ""}&lesson=${
                inputValues.lesson || ""
              }&date=${inputValues.date || ""}&name=${inputValues.name || ""}`,
            }}
          >
            <button type="submit">aaa</button>
          </Link>
        </form>
      </LeftElement>
      <RightElement>
        <TemMessage />
      </RightElement>
    </SDiv>
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
  margin-bottom: 10%;
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
