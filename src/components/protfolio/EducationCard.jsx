import React, { useEffect, useRef } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import '../../styles/scroll.css';

const EducationCard = ({ institution, degree, years, description, isLast }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div className="relative mb-10 pl-10">
      {/* Step Icon */}
      <div
        className={`absolute left-[-18px] top-0 flex items-center justify-center text-white rounded-full w-8 h-8 ${
          isLast ? 'bg-yellow-500 blink-light' : 'bg-blue-500'
        }`}
      >
        <FaGraduationCap />
      </div>

      {/* Content Card */}
      <div
        ref={cardRef}
        className="bg-gray-800 shadow-lg rounded-xl p-6 transition-all duration-1000 ease-out"
        style={{
          opacity: 0,
          transform: 'translateY(20px)',
        }}
      >
        <h3 className="text-2xl font-semibold text-white">{institution}</h3>
        <p className="text-lg text-gray-300">{degree}</p>
        <p className="text-sm text-gray-500 mb-4">{years}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default EducationCard;
