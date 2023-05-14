import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { TemMessage } from "./TemMessage";

export const WelcomePage = () => {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
    console.log(inputValues);
  };

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const copyText = document.querySelector("#copy-text");
    navigator.clipboard.writeText(copyText.innerText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <>
      <SBDiv>
        <Header />
        <SDiv>
          <LeftElement>
            <form style={{ textAlign: "center" }}>
              <div>
                <SelectParent>
                  <div>step1. 欠席理由を選択してね！</div>
                  <SSelect
                    name="reason"
                    value={inputValues.reason || ""}
                    onChange={handleInputChange}
                  >
                    <option value="selectReeason">
                      欠席理由を選択してください
                    </option>
                    <option value="recruitment">就活</option>
                    <option value="fever">体調不良</option>
                    <option value="funeral">身内の不幸</option>
                    <option value="marry">結婚式</option>
                    <option value="delay">交通機関の遅延</option>
                  </SSelect>
                </SelectParent>
                <div>
                  <SStep2>
                    step2. 隣のテンプレート文を参考に、以下を入力してね！
                  </SStep2>
                  <SMobile>step2. 下の欄を入力してね！</SMobile>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                <button type="submit">作成</button>
              </Link>
            </form>
          </LeftElement>
          <RightElement>
            <SCopyButton>
              <CopyButton onClick={copyToClipboard}>
                {isCopied ? "Copied!" : "Copy"}
              </CopyButton>
            </SCopyButton>
            <div id="copy-text">
              <TemMessage
                teacher={inputValues.teacher || "{ 教授の名前 }"}
                university={inputValues.university || "{ 大学学部学科 }"}
                grade={inputValues.grade || "{ 学年 }"}
                name={inputValues.name || "{ 氏名 }"}
                date={inputValues.date || "{ 日付（○月○日) }"}
                time={inputValues.time || "{ 何限目 }"}
                lesson={inputValues.lesson || "{ 講義名 }"}
                mail={inputValues.mail || "{ 自身のメールアドレス }"}
                id={inputValues.id || "{ 学籍番号 }"}
                number={inputValues.number || "{ 電話番号 }"}
                reason={inputValues.reason}
              />
            </div>
          </RightElement>
        </SDiv>
      </SBDiv>
    </>
  );
};

const SBDiv = styled.div`
  height: 100vh;
  background-color: #e6f9f8;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @media (max-width: 600px) {
    overflow-y: scroll;
  }
`;

const SDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
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
  margin-top: 3%;
`;

const RightElement = styled.div`
  width: 50%;
  margin-top: 4%;
  @media (max-width: 600px) {
    width: 95%;
  }
`;

const SelectParent = styled.div`
  @media (max-width: 600px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
  }
`;

const SStep2 = styled.div`
  margin-top: 5%;
  @media (max-width: 600px) {
    display: none;
  }
`;

const SCopyButton = styled.div`
  position: absolute;
  right: 3%;
  margin-top: 15px;
`;

const CopyButton = styled.button`
  padding: 4px 8px;
`;

const SMobile = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
