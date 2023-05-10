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
              <div>step1. 欠席理由を選択してね！</div>
<SSelect
                name="reason"
                value={inputValues.reason || ""}
                onChange={handleInputChange}
              >
                <option value="selectREeason">
                  欠席理由を選択してください
                </option>
                <option value="recruitment">就活</option>
                <option value="fever">体調不良</option>
                <option value="C先生">部活</option>
              </SSelect>
            </SelectParent>
            <div>
              <SStep2>
                step2. 隣のテンプレート文を参考に、以下を入力してね！
              </SStep2>
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
                name="grade"
                placeholder="学年（数字のみ）"
                value={inputValues.grade || ""}
                onChange={handleInputChange}
              />

              <SInput
                name="name"
                placeholder="氏名"
                value={inputValues.name || ""}
                onChange={handleInputChange}
              />
              <SInput
                name="date"
                placeholder="日付（◯月◯日)"
                value={inputValues.date || ""}
                onChange={handleInputChange}
              />
              <SInput
                name="time"
                placeholder="何限目（数字のみ）"
                value={inputValues.time || ""}
                onChange={handleInputChange}
              />
              <SInput
                name="lesson"
                placeholder="講義名"
                value={inputValues.lesson || ""}
                onChange={handleInputChange}
              />
              <SInput
                name="id"
                placeholder="学籍番号"
                value={inputValues.id || ""}
                onChange={handleInputChange}
              />
              <SInput
                name="mail"
                placeholder="メールアドレス"
                value={inputValues.mail || ""}
                onChange={handleInputChange}
              />
              <SInput
                name="number"
                placeholder="電話番号"
                value={inputValues.number || ""}
                onChange={handleInputChange}
              />
            </div>
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
              }&time=${inputValues.time || ""}&id=${
                inputValues.id || ""
              }&number=${inputValues.number || ""}`,
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
          date="{ 日付（○月○日) }"
          time="{ 何限目 }"
          lesson="{ 講義名 }"
          mail="{ 自身のメールアドレス }"
          id="{ 学籍番号 }"
          number="{ 電話番号 }"
          reason={inputValues.reason}
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
  margin-top: 2%;
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
  margin-top: -14%;
  margin-left: 35%;
`;

const SStep2 = styled.div`
  margin-left: 20%;
  margin-top: 5%;
`;
