import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CompanyPage } from "./components/CompanyPage";
import { PartTimePage } from "./components/PartTimePage";
import { UniversityPage } from "./components/UniversityPage";
import { WelcomePage } from "./components/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage></WelcomePage>} />
        <Route path="/university" element={<UniversityPage></UniversityPage>} />
        <Route path="/part-time" element={<PartTimePage></PartTimePage>} />
        <Route path="/company" element={<CompanyPage></CompanyPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
