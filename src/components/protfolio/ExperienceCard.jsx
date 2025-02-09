import React, { useEffect, useRef, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import "./ShiningText.css";

const ExperienceCard = () => {
  const cardRef = useRef(null);
  const [placeholderText, setPlaceholderText] = useState("");
  const placeholderData = ["React Developer", "Frontend Expert", "Backend Engineer", "UI/UX Specialist"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      },
      { threshold: 1}
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  useEffect(() => {
    let index = 0;

    const updatePlaceholder = () => {
      setPlaceholderText(placeholderData[index]);
      index = (index + 1) % placeholderData.length;
    };

    const interval = setInterval(updatePlaceholder, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [placeholderData]);

  return (
    <div
      ref={cardRef}
      className="relative bg-gray-800 shadow-lg rounded-xl p-6 mb-10 transition-all duration-1000 ease-out"
      style={{
        opacity: 0,
        transform: "translateY(20px)",
      }}
    >
      <div className="flex items-center mb-4">
        <h6>Full Stack Developer</h6>
      </div>

      {/* Neon Glowing Input Box with Dynamic Placeholder */}
      <input type="text" placeholder={placeholderText} className="neon-input" disabled />

    </div>
  );
};

export default ExperienceCard;
