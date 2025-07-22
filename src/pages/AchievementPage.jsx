// src/pages/AchievementPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import AchievementTimeline from "../components/AchievementTimeline";

const AchievementPage = () => {
  return (
    <div className="min-h-screen bg-primary text-white pt-20 px-4">
      {/* Back to Home link */}
      <Link
        to="/"
        className="inline-block mb-6 text-purple-300 hover:text-purple-500 font-semibold underline"
      >
        ← Back to Home
      </Link>

      <AchievementTimeline />
    </div>
  );
};

export default AchievementPage;
