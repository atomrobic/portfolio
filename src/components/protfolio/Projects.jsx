import React from 'react';
import { Card, Button, Space } from 'antd';
import { GithubOutlined, LikeOutlined, EyeOutlined } from '@ant-design/icons';
import { projects } from '../dummydata/datapro'; // Import project data

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.name}
          extra={
            <Button
              icon={<GithubOutlined />}
              href={project.link}
              target="_blank"
              type="danger"
            >
              
            </Button>
          }
          hoverable
          className="hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
        >
          <p>{project.description}</p>
          {/* Icon Buttons */}
          <Space className="mt-4">
            <Button 
              icon={<LikeOutlined />} 
              type="text" 
              className="hover:text-blue-600"
            >
              Like
            </Button>
            <Button 
              icon={<EyeOutlined />} 
              type="text" 
              className="hover:text-green-600"
            >
              View
            </Button>
          </Space>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
