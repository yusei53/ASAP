import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { TemMessage } from "./TemMessage";

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
        <TemMessage
          teacher={teacher}
          name={name}
          lesson={lesson}
          university={university}
          date={date}
          grade={grade}
          mail={mail}
        />
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
