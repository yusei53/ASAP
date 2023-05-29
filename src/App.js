import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UniversityPage } from "./components/UniversityPage";
import { WelcomePage } from "./components/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage></WelcomePage>} />
        <Route path="/university" element={<UniversityPage></UniversityPage>} />
        <Route path="/part-time" element={""} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
