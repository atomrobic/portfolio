import React, { useEffect, useState } from 'react';

const ProjectView = ({ projectId, projectName }) => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Create a unique key for the project in localStorage
    const storageKey = `project_${projectId}_viewCount`;
    const currentCount = parseInt(localStorage.getItem(storageKey)) || 0;

    // Increment the count
    const newCount = currentCount + 1;
    setViewCount(newCount);

    // Save the updated count
    localStorage.setItem(storageKey, newCount);
  }, [projectId]);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
      <h2 className="text-xl font-bold">{projectName}</h2>
      <p className="mt-2">View Count: {viewCount}</p>
    </div>
  );
};

export default ProjectView;
