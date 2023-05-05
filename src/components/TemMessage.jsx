import styled from "styled-components";

export const TemMessage = () => {
  return (
    <SBox>
      □□先生 いつもご指導いただきありがとうございます。 <br />
      △△学部××学部 〇年 田雲花子です。
      <br />
      <br />
      <br />
      本日は体調を崩し、授業を受けられそうにありません。
      <br />
      <br />
      申し訳ありませんが、本日2限目の〇〇（授業名）の授業は欠席させてください。
      <br />
      <br />
      また、本日の課題がございましたら教えていただけると幸いです。
      <br />
      お手数おかけしますが、どうぞ宜しくお願い致します。
      <br />
      <br />
      ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ <br />
      <br />
      〇〇大学△△学部××学科 〇年 田雲花子 <br />
      メール : XXXXXX@XXXXX.ac.jp <br />
      携帯電話：090-○○○○-×××× <br />
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
