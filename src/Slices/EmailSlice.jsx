import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailTemplate: "", // メールのテンプレートを保持するステート
  inputvalue: {},
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmailTemplate: (state, action) => {
      const { name, value } = action.payload;
      state.inputvalue = { ...state.inputvalue, [name]: value };
      state.emailTemplate = ```{teacher}先生 お忙しいところ失礼致します。
        {university} {grade}年 {name}です。

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
        ーーーーーーーーーーーーーーーーーーーーー <br />
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
        ーーーーーーーーーーーーーーーーーーーーー```;
    },
  },
});

export const { setEmailTemplate } = emailSlice.actions;
export default emailSlice.reducer;
