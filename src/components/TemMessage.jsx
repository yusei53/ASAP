import styled from "styled-components";

export const TemMessage = (props) => {
  const { teacher, university, grade, name, date, time, lesson, mail } = props;
  return (
    <SBox>
      {teacher}先生 お忙しいところ失礼致します。 <br />
      {university} {grade}年 {name}です。
      <br />
      <br />
      <br />
      本日は体調を崩し、授業を受けられそうにありません。
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
