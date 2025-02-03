// import React, { useState } from 'react';
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaDatabase, FaAws, FaGitAlt } from 'react-icons/fa';
// import '../../styles/main.css';

// const CardComponent = ({ icon: Icon, title, text }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className={`card ${isHovered ? 'hover' : ''}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         transform: isHovered ? 'rotateY(80deg)' : 'none',
//         boxShadow: isHovered ? '0 10px 20px rgba(0, 0, 0, 0.3)' : 'none',
//         transition: 'transform 0.6s ease, box-shadow 0.6s ease',  // Adding a transition to slow the effect
//       }}
//     >
//       <div className="icon">
//         <Icon size={40} color={isHovered ? '#007acc' : '#333'} />
//       </div>
//       <p className="title">{title}</p>
//       <p className="text">{text}</p>
//     </div>
//   );
// };

// const Skills = () => {
//   return (
//     <div>
//       <h2 className="skills-heading">Skills</h2>
//       <div className="content">
//         <CardComponent icon={FaHtml5} title="HTML" text="HyperText Markup Language" />
//         <CardComponent icon={FaCss3Alt} title="CSS" text="Cascading Style Sheets" />
//         <CardComponent icon={FaJsSquare} title="JavaScript" text="Scripting language for interactive web pages" />
//         <CardComponent icon={FaReact} title="React" text="JavaScript library for building user interfaces" />
//         <CardComponent icon={FaPython} title="Django" text="Python web framework for rapid development" />
//         <CardComponent icon={FaDatabase} title="SQL" text="Structured Query Language for managing databases" />
//         <CardComponent icon={FaAws} title="AWS" text="Amazon Web Services cloud computing platform" />
//         <CardComponent icon={FaGitAlt} title="Git" text="Version control system for tracking changes" />
//       </div>
//     </div>
//   );
// };

// export default Skills;
import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaDatabase, FaAws, FaGitAlt } from 'react-icons/fa';
// import '../../styles/main.css';

const CardComponent = ({ icon: Icon, title, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card ${isHovered ? 'hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'rotateY(10deg)' : 'none',
        boxShadow: isHovered ? '0 10px 20px rgba(0, 0, 0, 0.3)' : 'none',
        transition: 'transform 0.6s ease, box-shadow 0.6s ease',  // Adding a transition to slow the effect
      }}
    >
      <div className="icon">
        <Icon size={40} color={isHovered ? '#007acc' : '#333'} />
      </div>
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <h2 className="skills-heading">Skills</h2>
      <div className="content">
        <CardComponent icon={FaHtml5} title="HTML" text="HyperText Markup Language" />
        <CardComponent icon={FaCss3Alt} title="CSS" text="Cascading Style Sheets" />
        <CardComponent icon={FaJsSquare} title="JavaScript" text="Scripting language for interactive web pages" />
        <CardComponent icon={FaReact} title="React" text="JavaScript library for building user interfaces" />
        <CardComponent icon={FaPython} title="Django" text="Python web framework for rapid development" />
        <CardComponent icon={FaDatabase} title="SQL" text="Structured Query Language for managing databases" />
        <CardComponent icon={FaAws} title="AWS" text="Amazon Web Services cloud computing platform" />
        <CardComponent icon={FaGitAlt} title="Git" text="Version control system for tracking changes" />
      </div>
    </div>
  );
};

export default Skills;
