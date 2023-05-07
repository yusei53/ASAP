import styled from "styled-components";

export const TemMessage = (props) => {
  const { teacher, university, grade, name, date, lesson, mail } = props;
  return (
    <SBox>
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
      <br />
      ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    </SBox>
  );
};

const SBox = styled.div`
  background-color: white;
  margin-right: 10px;
  padding: 18px;
`;
