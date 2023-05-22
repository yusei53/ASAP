import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { WelcomePage } from "./components/WelcomePage";
import { Welcome } from "./components/Welocome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome></Welcome>} />
        <Route path="/home" element={<WelcomePage></WelcomePage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
