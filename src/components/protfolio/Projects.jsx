import React, { useEffect, useRef, useState } from 'react';
import { Card, Button } from 'antd';
import { GithubOutlined, EyeOutlined } from '@ant-design/icons';
import { projects } from '../dummydata/datapro';
import '../../styles/AvatarStyles.css';

const Projects = () => {
  const cardRefs = useRef([]);
  const [viewCounts, setViewCounts] = useState({});

  useEffect(() => {
    // Load view counts from localStorage
    const storedViewCounts = {};
    projects.forEach((project) => {
      const count = localStorage.getItem(`project_${project.id}_views`) || 0;
      storedViewCounts[project.id] = parseInt(count);
    });
    setViewCounts(storedViewCounts);

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            incrementView(entry.target.dataset.projectId);
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const incrementView = (projectId) => {
    const newCount = (viewCounts[projectId] || 0) + 1;
    setViewCounts((prevCounts) => ({
      ...prevCounts,
      [projectId]: newCount,
    }));
    localStorage.setItem(`project_${projectId}_views`, newCount);
  };

  return (
    <div className="p-5 space-y-6">
      {projects.map((project, index) => (
        <Card
          ref={(el) => (cardRefs.current[index] = el)}
          key={project.id}
          className="project-card opacity-0"
          hoverable
          data-project-id={project.id}
          cover={
            project.videoUrl ? (
              <iframe
                className="w-full h-[250px] rounded-t-2xl"
                src={project.videoUrl}
                title={`${project.name} video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={project.coverPhoto}
                alt={`${project.name} cover`}
                className="w-full h-[250px] object-cover rounded-t-2xl"
              />
            )
          }
        >
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {project.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <Button
                icon={<GithubOutlined />}
                href={project.link}
                target="_blank"
                type="primary"
                shape="round"
              >
                View Code
              </Button>
              <div className="flex items-center text-gray-600 ml-2">
                <EyeOutlined className="mr-1" />
                <span>{viewCounts[project.id] || 0}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
