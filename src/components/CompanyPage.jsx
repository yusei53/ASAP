import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Text } from "./Text";

export const CompanyPage = () => {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const copyText = document.querySelector("#copy-text");
    navigator.clipboard.writeText(copyText.innerText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  const handleUniversityButtonClick = () => {
    const mailto = encodeURIComponent(
      `${inputValues.mailto || "example@gmail.com"}`
    );

    const subject = encodeURIComponent(
      `${inputValues.date || "{ 日付（○月○日) }"}${
        inputValues.time || "{ 何限 }"
      }${inputValues.lesson || "{ 講義名 }"}欠席のご連絡`
    );
    const body = encodeURIComponent(`コピーしたものを貼り付けてね！`);

    window.location.href = `mailto:${mailto}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <SBDiv>
        <Header />
        <SDiv>
          <LeftElement>
            <div style={{ textAlign: "center" }}>
              <div>
                <SelectParent>
                  <div
                    style={{
                      marginTop: "4%",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    step1. メールを送る理由を選択してね！
                  </div>
                  <SSelect
                    name="reason"
                    value={inputValues.reason || ""}
                    onChange={handleInputChange}
                  >
                    <option value="selectReeason">
                      メールを送る理由を選択してください
                    </option>
                    <option value="recruitment">内定辞退</option>
                    <option value="fever">インターン内定辞退</option>
                  </SSelect>
                </SelectParent>
                <div>
                  <div
                    style={{
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    step2. 送信先のメールアドレスを入力してね！
                  </div>
                  <SSInput
                    name="mailto"
                    placeholder="送信先のメールアドレス"
                    value={inputValues.mailto || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <SelectParent2>
                  <Sstep3>
                    step3. 隣のテンプレート文を参考に、以下を入力してね！
                  </Sstep3>
                  <SMobile>step3. 下の欄を入力してね！</SMobile>
                  <SElement>
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
                  </SElement>
                </SelectParent2>
              </div>
              <BlueButton onClick={handleUniversityButtonClick}>
                メールを開く
              </BlueButton>
            </div>
          </LeftElement>
          <RightElement>
            <SCopyButton>
              <CopyButton onClick={copyToClipboard}>
                {isCopied ? "Copied!" : "Copy"}
              </CopyButton>
            </SCopyButton>
            <SCopyText id="copy-text">
              <Text
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
            </SCopyText>
          </RightElement>
        </SDiv>
      </SBDiv>
    </>
  );
};

const SBDiv = styled.div`
  background-color: #e6f9f8;
  min-height: 100vh; /* ページの最小の高さを100vhに設定 */
  flex-direction: column; /* 子要素を縦方向に配置 */
  align-items: center; /* 子要素を中央に配置 */
`;

const SDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SInput = styled.input`
  margin-top: 2%;
  margin-bottom: 5%;
  height: 21px;
  border-radius: 9999px;
  border: 1px solid black;
  width: 100%;
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 3%;
  }
`;

const SSInput = styled.input`
  margin-top: 2%;
  margin-bottom: 5%;
  height: 21px;
  border-radius: 9999px;
  border: 1px solid black;
  width: 50%;
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 2%;
  }
`;

const SSelect = styled.select`
  margin-top: 2%;
  margin-bottom: 5%;
  height: 25px;
  border-radius: 9999px;
  border: 1px solid black;
  @media (max-width: 768px) {
    margin-bottom: 2%;
  }
`;

const LeftElement = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const RightElement = styled.div`
  width: 50%;
  margin-top: 4%;
  margin-right: 2%;
  @media (max-width: 768px) {
    width: 95%;
    margin-right: 0;
  }
`;

const SelectParent = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
  }
`;

const Sstep3 = styled.div`
  margin-bottom: 2%;
  font-weight: 500;
  font-size: 17px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SCopyButton = styled.div`
  position: absolute;
  right: 4%;
  margin-top: 15px;
  @media (max-width: 768px) {
    right: 8%;
  }
`;

const CopyButton = styled.button`
  padding: 4px 8px;
`;

const SMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2%;
    font-weight: 500;
  }
`;

const SElement = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 6%;
  grid-column-gap: 10px; /* 適宜間隔のサイズを調整 */
  width: 70%;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const SelectParent2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
  }
`;

const SCopyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlueButton = styled.button`
  background-color: #1c97a0;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 50px;
  font-size: 15px;
  cursor: pointer;
`;
