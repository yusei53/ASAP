// import React from "react";
// import { useLocation } from "react-router-dom";
// import styled from "styled-components";
// import { useState } from "react";
// import { Text } from "./Text";

// export const GetText = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);

//   const teacher = searchParams.get("teacher");
//   const mail = searchParams.get("mail");
//   const grade = searchParams.get("grade");
//   const university = searchParams.get("university");
//   const lesson = searchParams.get("lesson");
//   const date = searchParams.get("date");
//   const time = searchParams.get("time");
//   const name = searchParams.get("name");
//   const id = searchParams.get("id");
//   const number = searchParams.get("number");
//   const reason = searchParams.get("reason");

//   const [isCopied, setIsCopied] = useState(false);

//   const copyToClipboard = () => {
//     const copyText = document.querySelector("#copy-text");
//     navigator.clipboard.writeText(copyText.innerText);
//     setIsCopied(true);
//     setTimeout(() => setIsCopied(false), 1000);
//   };

//   return (
//     <SDiv>
//       <SCopyButton>
//         <CopyButton onClick={copyToClipboard}>
//           {isCopied ? "Copied!" : "Copy"}
//         </CopyButton>
//       </SCopyButton>
//       <CopyText id="copy-text">
//         <Text
//           teacher={teacher}
//           name={name}
//           lesson={lesson}
//           university={university}
//           date={date}
//           grade={grade}
//           time={time}
//           mail={mail}
//           id={id}
//           number={number}
//           reason={reason}
//         />
//       </CopyText>
//     </SDiv>
//   );
// };

// const SDiv = styled.div``;

// const SCopyButton = styled.div`
//   position: absolute;
//   right: 29%;
//   margin-top: -2%;
// `;

// const CopyButton = styled.button`
//   padding: 4px 8px;
//   margin: 10px -10px;
// `;

// const CopyText = styled.div`
//   margin-top: -4%;
//   width: 100%;
// `;