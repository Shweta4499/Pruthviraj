import { Routes, Route } from "react-router-dom";
import AchievementPage from "./pages/AchievementPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar"; // Make sure this path is correct
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <><ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<AchievementPage />} />
      </Routes>
    </>
  );
};

export default App;
