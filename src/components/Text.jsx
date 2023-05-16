import { useState, useEffect } from "react";
import styled from "styled-components";

export const Text = (props) => {
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

  const [reasonText, setReasonText] = useState("");

  useEffect(() => {
    switch (reason) {
      case "fever":
        setReasonText(
          "本日なのですが、体調を崩してしまい、講義を受けられそうにありません。"
        );
        break;
      case "recruitment":
        setReasonText(
          "本日なのですが、就職活動のため、講義を受けれそうにありません。"
        );
        break;
      case "funeral":
        setReasonText(
          "先日、身内に不幸があったため、急遽欠席させていただきたく、失礼とは存じますがここに取り急ぎメールにてご連絡させていただきます。"
        );
        break;
      case "marry":
        setReasonText(
          "本日なのですが、冠婚葬祭のため、講義を受けれそうにありません。"
        );
        break;
      case "delay":
        setReasonText(
          "ただいま大学に向かっているのですが、人身事故の影響で電車が止まってしまい、講義時間内の到着が難しいとのことです。"
        );
        break;
      default:
        break;
    }
  }, [reason]);

  return (
    <SBox>
      <SText>
        {teacher}先生 お忙しいところ失礼致します。 <br />
        {university} {grade}年 {name}です。
        <br />
        <br />
        {reasonText}
        <br />
        <br />
        申し訳ありませんが、{date} {time}限の{lesson}
        の講義は欠席させてください。
        <br />
        <br />
        また、本日の課題がございましたら教えていただけると幸いです。
        <br />
        お手数おかけしますが、どうぞ宜しくお願い致します。
        <br />
        <br />
        <br />
        <br />
        ーーーーーーーーーーーーーーーーーー <br />
        <br />
        {name}
        <br />
        {university} {grade}年
        <br />
        学籍番号 : {id}
        <br />
        メールアドレス : {mail}
        <br />
        電話番号 : {number}
        <br />
        <br />
        ーーーーーーーーーーーーーーーーーー
      </SText>
    </SBox>
  );
};

const SBox = styled.div`
  background-color: white;
  width: 93%;
  padding: 16px;
  @media (max-width: 600px) {
    width: 88%;
    margin-bottom: 5%;
  }
`;

const SText = styled.div`
  padding-top: 25px;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
