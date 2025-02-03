import React, { useEffect, useRef } from 'react';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceCard = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative bg-gray-800 shadow-lg rounded-xl p-6 mb-10 transition-all duration-1000 ease-out"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
      }}
    >
      <div className="flex items-center mb-4">
        <FaBriefcase size={28} className="text-blue-500 mr-4" />
        <div>
          <h3 className="text-2xl font-semibold text-white">Full Stack Developer</h3>
          <p className="text-lg text-gray-300">Tech Innovations Ltd.</p>
          <p className="text-sm text-gray-500">2021 - Present</p>
        </div>
      </div>
      <p className="text-gray-400 mb-4">
        Building and maintaining scalable web applications, designing APIs, and implementing new features.
      </p>
      <div>
        <h4 className="text-lg font-medium text-blue-400 mb-2">Skills Used:</h4>
        <ul className="list-disc list-inside text-gray-400">
          <li>React.js</li>
          <li>Django</li>
          <li>REST APIs</li>
          <li>PostgreSQL</li>
          <li>AWS</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
