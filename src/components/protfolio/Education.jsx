import React from 'react';
import EducationCard from './EducationCard';

const educationData = [
  {
    institution: 'Harvard University',
    degree: 'Bachelor of Science in Computer Science',
    years: '2015 - 2019',
    description: 'Focused on software development and data science.',
  },
  {
    institution: 'MIT',
    degree: 'Master of Artificial Intelligence',
    years: '2019 - 2021',
    description: 'Specialized in machine learning algorithms.',
  },
  {
    institution: 'Stanford University',
    degree: 'Ph.D. in Robotics',
    years: '2021 - 2024',
    description: 'Research focused on autonomous systems.',
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
