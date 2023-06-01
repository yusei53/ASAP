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
      state.emailTemplate = `{teacher}先生 お忙しいところ失礼致します。
        {university} {grade}年 {name}です。
        {reasonText}
   
        申し訳ありませんが、{date} {time}限の{lesson}
        の講義は欠席させてください。

        また、本日の課題がございましたら教えていただけると幸いです。
      
        お手数おかけしますが、どうぞ宜しくお願い致します。
       
        ーーーーーーーーーーーーーーーーーーーーー
  
        {name}

        {university} {grade}年

        学籍番号 : {id}

        メールアドレス : {mail}

        電話番号 : {number}
   
 
        ーーーーーーーーーーーーーーーーーーーーー`;
    },
  },
});

export const { setEmailTemplate } = emailSlice.actions;
export default emailSlice.reducer;
