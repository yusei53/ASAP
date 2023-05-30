import { useDispatch } from "react-redux";
import { setEmailTemplate } from "path/to/emailSlice";

const EmailForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 入力値を取得してテンプレートを作成する処理
    const template = `{company} 人事部 採用ご担当 {yourname}様
      お世話になっております。{university}
      {grade}年{name}です。
      ...
      ーーーーーーーーーーーーーーーーーーーーー`;

    dispatch(setEmailTemplate(template));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 入力フォームの表示 */}
      <button type="submit">保存</button>
    </form>
  );
};
