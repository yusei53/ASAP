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
          <div>
            <SelectParent>
              <SSelect
                name="reason"
                value={inputValues.reason || ""}
                onChange={handleInputChange}
              >
                <option value="selectREeason">
                  欠席理由を選択してください
                </option>
                <option value="A先生">就活</option>
                <option value="B先生">体調不良</option>
                <option value="C先生">部活</option>
              </SSelect>
            </SelectParent>
            <SSelect
              name="grade"
              placeholder="学年"
              value={inputValues.grade || ""}
              onChange={handleInputChange}
            >
              <option value="sss">学年を選択してください</option>
              <option value="1">1</option>
            </SSelect>
            <SInput
              name="teacher"
              placeholder="教授の名前"
              value={inputValues.teacher || ""}
              onChange={handleInputChange}
            />
            <SInput
              name="university"
              placeholder="大学学部学科"
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
              placeholder="氏名"
              value={inputValues.name || ""}
              onChange={handleInputChange}
            />
            <SInput
              name="mail"
              placeholder="メールアドレス"
              value={inputValues.mail || ""}
              onChange={handleInputChange}
            />
          </div>
          <Link
            to={{
              pathname: "/home",
              search: `&reason=${inputValues.reason || ""}&grade=${
                inputValues.grade || ""
              }&university=${inputValues.university || ""}&lesson=${
                inputValues.lesson || ""
              }&date=${inputValues.date || ""}&name=${
                inputValues.name || ""
              }&teacher=${inputValues.teacher || ""}&mail=${
                inputValues.mail || ""
              }`,
            }}
          >
            <SButton type="submit">作成</SButton>
          </Link>
        </form>
      </LeftElement>
      <RightElement>
        <TemMessage
          teacher="{ 教授の名前 }"
          university="{ 大学学部学科 }"
          grade="{ 学年 }"
          name="{ 氏名 }"
        />
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

const SSelect = styled.select`
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

const SButton = styled.button`
  margin-left: 50%;
`;

const SelectParent = styled.div`
  margin-left: 40%;
`;
