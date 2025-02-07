import React from 'react';
import EducationCard from './EducationCard';

const educationData = [
  {
    institution: 'THSS Thadicadu',
    degree: 'High School ',
    years: '2015 - 2019',
  },
  {
    institution: 'Vishwabarathy College (MIT)',
    degree: 'B.A History',
    years: '2019 - 2021',
  },
  {
    institution: 'Mashupstack',
    degree: 'Diploma in Web Development',
    years: '2024 - 2025',
    description: 'Python, React & Django Developer.',
  },
  {
    institution: 'Freelancer (Full Stack)',
    degree: 'Diploma in Web Development',
    years: '2024 - 2025',
    description: 'Python, React & Django Developer.',
  },
];

const Education = () => {
  return (
    <section className="relative mt-8 p-4 w-full">
      <h2 className="text-3xl font-bold text-purple-600 text-center mb-8 relative">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Education
        </span>
        <div className="absolute left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mt-2"></div>
      </h2>

      {/* Timeline Line */}
      <div className="absolute left-4 top-0 w-1 bg-purple-600 h-full"></div>
      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            institution={edu.institution}
            degree={edu.degree}
            years={edu.years}
            description={edu.description}
            isLast={index === educationData.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
