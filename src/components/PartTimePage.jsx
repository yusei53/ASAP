import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Header } from "./Header";
import { PartTimeText } from "./PartTimeText";

export const PartTimePage = () => {
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
                      marginTop: "10%",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    step1. バイトを休む理由を選択してね！
                  </div>
                  <SSelect
                    name="reason"
                    value={inputValues.reason || ""}
                    onChange={handleInputChange}
                  >
                    <option value="selectReeason">
                      欠席理由を選択してください
                    </option>
                    <option value="problem">シフト勘違い</option>
                    <option value="fever">体調不良</option>
                    <option value="funeral">身内の不幸</option>
                    <option value="pets">ペット関連</option>
                  </SSelect>
                </SelectParent>
                <div>
                  <div
                    style={{
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    step2.
                    メールで送る場合のみ送信先のメールアドレスを入力してね！
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
                      name="name"
                      placeholder="氏名"
                      value={inputValues.name || ""}
                      onChange={handleInputChange}
                    />
                    <SInput
                      name="time"
                      placeholder="シフトの時間（数字のみ）"
                      value={inputValues.time || ""}
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
              <PartTimeText
                name={inputValues.name || "{ 氏名 }"}
                time={inputValues.date || "{ 時間 }"}
                reason={inputValues.reason}
              />
            </SCopyText>
          </RightElement>
        </SDiv>
      </SBDiv>
    </>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SBDiv = styled.div`
  background-color: #e6f9f8;
  min-height: 100vh; /* ページの最小の高さを100vhに設定 */
  flex-direction: column; /* 子要素を縦方向に配置 */
  align-items: center; /* 子要素を中央に配置 */
  animation: ${fadeIn} 1s ease-in-out;
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
  grid-template-columns: repeat(1, 1fr);
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
