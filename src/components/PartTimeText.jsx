import { useState, useEffect } from "react";
import styled from "styled-components";

export const PartTimeText = (props) => {
  const { name, time, reason } = props;

  const [reasonText, setReasonText] = useState("");

  useEffect(() => {
    switch (reason) {
      case "problem":
        setReasonText(
          "本日なのですが、シフトを勘違いをしてしまい、日時を誤解してしまっていたため、出勤できそうにありません。 \n 連絡が遅れてしまったこと、また、私の誤った理解と疎失により、予定されていたシフトに出席できなかったことに深く反省しております。<br>これから、このような状況が発生しないよう、日程管理やシフトの確認についても改善策を考え、徹底する所存です。"
        );
        break;
      case "fever":
        setReasonText(
          "大変申し訳ないのですが、昨日から体調が優れず、今日も回復しないので、お休みをいただけないでしょうか。長引くようでしたら、再度改めて、連絡させていただきます。当日の連絡となってしまい、大変申し訳ありません。"
        );
        break;
      case "funeral":
        setReasonText(
          "先日、身内に不幸があったため、急で申し訳ありませんが、本日お休みさせていただきたいです。当日の連絡となってしまい、大変申し訳ありません。"
        );
        break;
      case "pets":
        setReasonText(
          "飼っている{該当のペットの名前に書き換えてください}の具合が悪く、病院に連れて行きたいのですが、連れて行けるのが自分しかいないので、本日バイトをお休みさせていただけないでしょうか。当日の連絡となってしまい、大変申し訳ありません。"
        );
        break;
      default:
        break;
    }
  }, [reason]);

  return (
    <SBox>
      <SText>
        お疲れ様です。本日{time}時からシフトに入っている{name}です。 <br />
        <br />
        <br />
        {reasonText}
        <br />
        <br />
        再度、ご迷惑とご心配をおかけしましたことを深くお詫び申し上げます。
        <br />
        <br />
        お手数おかけしますが、どうぞ宜しくお願い致します。
        <br />
        <br />
      </SText>
    </SBox>
  );
};

const SBox = styled.div`
  background-color: white;
  width: 93%;
  padding: 16px;
  margin-bottom: 5%;
  @media (max-width: 600px) {
    width: 88%;
  }
`;

const SText = styled.div`
  padding-top: 25px;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
