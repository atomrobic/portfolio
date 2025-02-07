import React from 'react';
import EducationCard from './EducationCard';

const educationData = [
  {
    institution: 'THSS Thadicadu',
    degree: 'High School ',
    years: '2015 - 2019',
  },
  {
    institution: 'Vishwabarathy college (MIT)',
    degree: 'B.A History',
    years: '2019 - 2021',
  },
  {
    institution: 'Masupstack',
    degree: 'diploma in Web development',
    years: '2024 - 2025',
    description: 'Python react & django developer.',
  },
  {
    institution: 'Freelancer (full stack)',
    degree: 'diploma in Web development',
    years: '2024 - 2025',
    description: 'Python react & django developer.',
  },
];

const Education = () => {
  return (
    <section className="relative mt-8 p-4 w-full">
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 w-1 bg-blue-500 h-full"></div>
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
