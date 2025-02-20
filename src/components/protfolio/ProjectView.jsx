import React, { useEffect, useState } from 'react';

const ProjectView = ({ projectId, projectName }) => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    if (!projectId) {
      console.warn("Project ID is missing!");
      return;
    }

    const storageKey = `project_${projectId}_views`;

    try {
      // Ensure we get a valid integer
      const currentCount = parseInt(localStorage.getItem(storageKey) || "0", 10);
      console.log(`Previous View Count for ${storageKey}:`, currentCount);

      // Increment and store the new count
      const newCount = currentCount + 1;
      localStorage.setItem(storageKey, newCount);
      setViewCount(newCount);

      console.log(`Updated View Count for ${storageKey}:`, newCount);
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, [projectId]);

  return (
    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', color: 'white' }}>
      <h2>{projectName}</h2>
      <p>View Count: {viewCount}</p>
    </div>
  );
};

export default ProjectView;
