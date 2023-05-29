import { useState, useEffect } from "react";
import styled from "styled-components";

export const CompanyText = (props) => {
  const { company, university, grade, name, yourname, mail, number, reason } =
    props;

  const [reasonText, setReasonText] = useState("");

  useEffect(() => {
    switch (reason) {
      case "recruitment":
        setReasonText(
          "本日なのですが、就職活動のため、講義を受けれそうにありません。"
        );
        break;
      case "fever":
        setReasonText(
          "本日なのですが、体調を崩してしまい、講義を受けられそうにありません。"
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
        {company} 人事部 採用ご担当 {yourname}様<br />
        お世話になっております。{name}です。
        <br />
        この度は、内定のご連絡をいただき、誠にありがとうございます。
        <br />
        <br />
        {reasonText}
        <br />
        <br />
        選考では、書類に目を通していただいたり面接を実施していただいたりと、
        <br />
        貴重なお時間をいただいたにもかかわらず、ご期待に添えず大変心苦しく思っております。
        <br />
        <br />
        本来であれば、直接お伺いしお詫びをするべきところではございますが、
        このようにメールでのご連絡となりましたことを、
        何卒ご容赦いただきたくお願い申し上げます。
        <br />
        末筆ながら、貴社の益々のご発展をお祈り申し上げます。
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
