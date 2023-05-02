import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { WelcomePage } from "./components/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage></WelcomePage>} />
        <Route path="/home" element={<HomePage>aaa</HomePage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
