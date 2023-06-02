import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailTemplate: "", // メールのテンプレートを保持するステート
  inputValues: {
    reason: "",
  },
};

const EmailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmailTemplate: (state, action) => {
      const { name, value } = action.payload;
      state.inputValues = { ...state.inputValues, [name]: value };
      state.emailTemplate = `${state.inputValues.teacher} 先生 お忙しいところ失礼致します。
        ${state.inputValues.university} ${state.inputValues.grade}年 ${state.inputValues.name}です。
        ${state.inputValues.reasontext}
   
        申し訳ありませんが、${state.inputValues.date} ${state.inputValues.time}限の${state.inputValues.lesson}
        の講義は欠席させてください。

        また、本日の課題がございましたら教えていただけると幸いです。
      
        お手数おかけしますが、どうぞ宜しくお願い致します。
       
        ーーーーーーーーーーーーーーーーーーーーー
  
        ${state.inputValues.name}

        ${state.inputValues.university} ${state.inputValues.grade}年

        学籍番号 :${state.inputValues.id}

        メールアドレス :${state.inputValues.mail}

        電話番号 : ${state.inputValues.number}
   
 
        ーーーーーーーーーーーーーーーーーーーーー`;
    },
  },
});

export const { setEmailTemplate } = EmailSlice.actions;
export default EmailSlice.reducer;
