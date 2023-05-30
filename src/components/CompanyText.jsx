import { useState, useEffect } from "react";
import styled from "styled-components";

export const CompanyText = (props) => {
  const { company, yourname, university, grade, name, mail, number, reason } =
    props;

  const [reasonText, setReasonText] = useState("");

  useEffect(() => {
    switch (reason) {
      case "CancelJob":
        setReasonText(
          "この度は、内定のご連絡をいただき、誠にありがとうございます。\n 内定通知をいただき大変恐縮ですが、今回の内定を辞退させていただきたく、ご連絡いたしました。自分のキャリアについて検討した結果、他社とのご縁を感じ、御社の内定を辞退する決断にいたりました。"
        );
        break;
      case "CancelIntern":
        setReasonText(
          "先日は長期インターンの採用連絡をいただきありがとうございました。\n 大変申し訳ございませんが、この度、他企業様での長期インターン採用が決まったため、内定辞退をさせていただきたくご連絡をいたしました。お忙しい中、面接の機会をいただいたのにも関わらず、誠に申し訳ございません。"
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
        <br />
        お世話になっております。{university}
        {grade}年{name}です。
        <br />
        この度は、内定のご連絡をいただき、誠にありがとうございます。
        <br />
        <br />
        {reasonText}
        <br />
        <br />
        選考では、書類に目を通していただいたり面接を実施していただいたりと、
        <br />
        ご多忙な中でお時間を割いていただきながら、このような形となり申し訳ございません。
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
        ーーーーーーーーーーーーーーーーーーーーー <br />
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
        ーーーーーーーーーーーーーーーーーーーーー
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
