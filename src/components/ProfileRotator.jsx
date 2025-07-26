// src/components/ProfileRotator.jsx
import React, { useEffect, useState } from "react";

const images = [
  "profile1.jpg",
  "/profile2.jpg",
  "/profile3.jpg",
  "/profile4.jpg",
]; // Add more if needed

const ProfileRotator = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex justify-center items-center my-12 md:hidden">
      <div className="w-[200px] h-[370px] rounded-xl overflow-hidden shadow-lg border-2 border-gray-400">
        <img
          src={images[current]}
          alt="Profile Achievement"
          className="w-full h-full object-cover transition-all duration-700"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ProfileRotator;
