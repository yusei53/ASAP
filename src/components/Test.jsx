import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export const Test = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const teacher = searchParams.get("teacher");
  const mail = searchParams.get("mail");
  const grade = searchParams.get("grade");
  const university = searchParams.get("university");
  const lesson = searchParams.get("lesson");
  const date = searchParams.get("date");
  const name = searchParams.get("name");

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const copyText = document.querySelector("#copy-text");
    navigator.clipboard.writeText(copyText.innerText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <SDiv>
      <div id="copy-text">
        {teacher}先生 いつもご指導いただきありがとうございます。 <br />
        {university} {grade} {name}です。
        <br />
        <br />
        <br />
        本日は体調を崩し、授業を受けられそうにありません。
        <br />
        <br />
        申し訳ありませんが、{date}2限目の{lesson}の授業は欠席させてください。
        <br />
        <br />
        また、本日の課題がございましたら教えていただけると幸いです。
        <br />
        お手数おかけしますが、どうぞ宜しくお願い致します。
        <br />
        <br />
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ <br />
        <br />
        {university} {grade} {name} <br />
        メール : {mail} <br />
        携帯電話：090-○○○○-×××× <br />
        <br />
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
      </div>
      <button onClick={copyToClipboard}>
        {isCopied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </SDiv>
  );
};

const SDiv = styled.div`
  margin-: 10%;
`;