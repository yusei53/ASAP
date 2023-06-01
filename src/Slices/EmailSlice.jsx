import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailTemplate: "", // メールのテンプレートを保持するステート
  inputvalue: {},
};

const EmailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmailTemplate: (state, action) => {
      const { name, value } = action.payload;
      state.inputvalue = { ...state.inputvalue, [name]: value };
      state.emailTemplate = `${state.inputvalue.teacher} 先生 お忙しいところ失礼致します。
        ${state.inputvalue.university} ${state.inputvalue.grade}年 ${state.inputvalue.name}です。
        ${state.inputvalue.reasontext}
   
        申し訳ありませんが、${state.inputvalue.date} ${state.inputvalue.time}限の${state.inputvalue.lesson}
        の講義は欠席させてください。

        また、本日の課題がございましたら教えていただけると幸いです。
      
        お手数おかけしますが、どうぞ宜しくお願い致します。
       
        ーーーーーーーーーーーーーーーーーーーーー
  
        ${state.inputvalue.name}

        ${state.inputvalue.university} ${state.inputvalue.grade}年

        学籍番号 :${state.inputvalue.id}

        メールアドレス :${state.inputvalue.mail}

        電話番号 : ${state.inputvalue.number}
   
 
        ーーーーーーーーーーーーーーーーーーーーー`;
    },
  },
});

export const { setEmailTemplate } = EmailSlice.actions;
export default EmailSlice.reducer;
