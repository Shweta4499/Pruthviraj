// src/App.jsx
import { Routes, Route } from "react-router-dom";
import AchievementPage from "./pages/AchievementPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/achievements" element={<AchievementPage />} />
    </Routes>
  );
};

export default App;
