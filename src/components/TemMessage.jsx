import styled from "styled-components";

export const TemMessage = () => {
  return (
    <SBox>
      <SElement>
        （教授の名前） いつもご指導いただきありがとうございます。 <br />
        （大学学部学科） （学年）年 （氏名）です。
        <br />
        <br />
        <br />
        本日は体調を崩し、授業を受けられそうにありません。
        <br />
        <br />
        申し訳ありませんが、（日付）（何限）の（授業名）の授業は欠席させてください。
        <br />
        <br />
        また、本日の課題がございましたら教えていただけると幸いです。
        <br />
        お手数おかけしますが、どうぞ宜しくお願い致します。
        <br />
        <br />
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ <br />
        <br />
        （大学学部学科） （学年）年 （氏名） <br />
        メール :（メールアドレス） <br />
        携帯電話：090-○○○○-×××× <br />
        <br />
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
      </SElement>
    </SBox>
  );
};

const SBox = styled.div`
  background-color: white;
  margin-right: 10px;
`;

const SElement = styled.div`
  padding: 18px;
`;
