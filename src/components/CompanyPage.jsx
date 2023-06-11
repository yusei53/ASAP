import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Header } from "./Header";
import { CompanyText } from "./CompanyText";

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

    const getReasonText = () => {
      switch (inputValues.reason) {
        case "CancelJob":
          return `この度は、内定のご連絡をいただき、誠にありがとうございます。
内定通知をいただき大変恐縮ですが、今回の内定を辞退させていただきたく、ご連絡いたしました。
自分のキャリアについて検討した結果、他社とのご縁を感じ、御社の内定を辞退する決断にいたりました。`;
        case "CancelIntern":
          return `先日は長期インターンの採用連絡をいただきありがとうございました。
大変申し訳ございませんが、この度、他企業様での長期インターン採用が決まったため、内定辞退をさせていただきたくご連絡をいたしました。
お忙しい中、面接の機会をいただいたのにも関わらず、誠に申し訳ございません。`;
        default:
          return "";
      }
    };
    const reasonText = getReasonText();

    const getSubject = () => {
      if (inputValues.reason === "CancelJob") {
        return encodeURIComponent("内定辞退のご連絡");
      } else if (inputValues.reason === "CancelIntern") {
        return encodeURIComponent("インターン内定辞退のご連絡");
      }
    };

    const subject = getSubject();

    const body = encodeURIComponent(`${
      inputValues.company || "{ 会社名（株式会社〇〇) }"
    } 人事部 採用ご担当 ${inputValues.yourname || "{ 担当者お名前 }"}}様


お世話になっております。${inputValues.university || "{ 大学学部学科 }"}${
      inputValues.grade || "{ 学年 }"
    }年${inputValues.name || "{ 名前 }"}です。

${reasonText || "{ 辞退理由 }"}

選考では、書類に目を通していただいたり面接を実施していただいたりと、ご多忙な中でお時間を割いていただきながら、このような形となり申し訳ございません。

本来であれば、直接お伺いしお詫びをするべきところではございますが、
このようにメールでのご連絡となりましたことを、
何卒ご容赦いただきたくお願い申し上げます。

末筆ながら、貴社の益々のご発展をお祈り申し上げます。



ーーーーーーーーーーーーーーーーーーー

${inputValues.name || "{ 名前 }"}

${inputValues.university || "{ 大学学部学科 }"}
${inputValues.grade || "{ 学年 }"}
年

メールアドレス : ${inputValues.grade || "{ 自身のメールアドレス }"}

電話番号 : ${inputValues.number || "{ 電話番号 }"}

ーーーーーーーーーーーーーーーーーーー`);

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
                    <option value="CancelJob">内定辞退</option>
                    <option value="CancelIntern">インターン内定辞退</option>
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
                      name="company"
                      placeholder="会社名（株式会社〇〇）"
                      value={inputValues.company || ""}
                      onChange={handleInputChange}
                    />
                    <SInput
                      name="yourname"
                      placeholder="担当者"
                      value={inputValues.yourname || ""}
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
              <CompanyText
                company={inputValues.company || "{ 会社名（株式会社〇〇) }"}
                yourname={inputValues.yourname || "{ 担当者お名前 }"}
                university={inputValues.university || "{ 大学学部学科 }"}
                grade={inputValues.grade || "{ 学年 }"}
                name={inputValues.name || "{ 氏名 }"}
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
  animation: ${fadeIn} 1s ease-in-out; /* アニメーションの適用 */
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
