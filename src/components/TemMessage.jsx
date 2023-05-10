import { useState, useEffect } from "react";
import styled from "styled-components";


export const TemMessage = (props) => {
  const {
    teacher,
    university,
    grade,
    name,
    date,
    time,
    lesson,
    id,
    mail,
    number,
    reason,
  } = props;

  const [reasonText, setReasonText] = useState('');

  useEffect(() => {
    switch (reason) {
      case 'fever':
        setReasonText('体調を崩してしまい');
        break;
      case 'recruitment':
        setReasonText('就活のため');
        break;
      default:
        break;
    }
  }, [reason])

  return (
    <SBox>
      {teacher}先生 お忙しいところ失礼致します。 <br />
      {university} {grade}年 {name}です。
      <br />
      <br />
      <br />
      {reasonText}
      <br />
      <br />
      申し訳ありませんが、{date} {time}限の{lesson}の授業は欠席させてください。
      <br />
      <br />
      また、本日の課題がございましたら教えていただけると幸いです。
      <br />
      お手数おかけしますが、どうぞ宜しくお願い致します。
      <br />
      <br />
      <br />
      <br />
      ーーーーーーーーーーーーーーーーーーーーーーーーーーーー <br />
      <br />
      {name}
      <br />
      {university} {grade}
      <br />
      学籍番号 : {id}
      <br />
      メール : {mail}
      <br />
      電話番号 : {number}
      <br />
      ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    </SBox>
  );
};

const SBox = styled.div`
  background-color: white;
  margin-right: 10px;
  margin-top: 8%;
  padding: 18px;
`;