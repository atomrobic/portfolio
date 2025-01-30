import React from 'react';
import { Button } from 'antd'; // Using Ant Design for styling
import { FileTextOutlined } from '@ant-design/icons'; // Icon for Resume

// Accept props for custom title and resume link
const Resume = ({ resumeLink, title }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      {/* Display dynamic title */}
      <h1 className="text-3xl font-bold mb-4">{title || 'Resume'}</h1>
      
      {/* Resume Button */}
      <Button 
        type="primary" 
        icon={<FileTextOutlined />} 
        href={resumeLink} 
        target="_blank"
      >
        View Resume
      </Button>
    </div>
  );
};

export default Resume;
