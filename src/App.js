import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { WelcomePage } from "./components/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage></WelcomePage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
