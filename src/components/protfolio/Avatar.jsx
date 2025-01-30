import React, { useState } from 'react';  // Make sure useState is imported
import { Button, Drawer, Card, Avatar, Carousel } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import Navbar from './Navbar';
import { projects } from '../dummydata/datapro';
import '../../styles/AvatarStyles.css';
import '../../styles/main.css';
// import Resume from './Resume'; // Import the Resume component
import CarsolCard from "./CarsolCard";  // case-sensitive import
import Header from "./Header";  // case-sensitive import

const AvatarCustomStyles = ({ resumeLink }) => {
  const [current, setCurrent] = useState('1');
  const [projectDrawerVisible, setProjectDrawerVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showProjectDrawer = () => setProjectDrawerVisible(true);
  const closeProjectDrawer = () => setProjectDrawerVisible(false);
  const toggleDrawer = () => setDrawerVisible(!drawerVisible);

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-white to-blue-50 text-gray-900 mb-3">
      <div className="flex min-h-screen flex-col lg:flex-row">

        {/* Full-screen Left Section (Tech News) */}
        <div className={`w-full lg:w-1/4 bg-gray-100/50 p-4 backdrop-blur-lg border-r border-gray-200/50 ${drawerVisible ? 'hidden' : ''} mobile-hidden`}>
          <Navbar current={current} onClick={setCurrent} />
          
          {/* Tech News Section with Carousel */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Latest Tech News</h2>
            <div className="mt-4 space-y-4">
              <Carousel autoplay dotPosition="bottom" autoplaySpeed={3000}>
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-blue-600">New JavaScript Features in ES2025</h3>
                  <p className="text-gray-700 mt-2">The latest ECMAScript release brings even more powerful features to the JavaScript language. Here’s what you need to know...</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-blue-600">Why React 19 is a Game-Changer</h3>
                  <p className="text-gray-700 mt-2">React 19 is here with several performance improvements and new hooks. Find out how this version can boost your development workflow...</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-blue-600">How AI is Shaping the Future of Web Development</h3>
                  <p className="text-gray-700 mt-2">AI tools like Copilot and others are revolutionizing how developers work. Explore how they are transforming web development...</p>
                </div>
               
              </Carousel>
              <CarsolCard />
            </div>
          </div>

          {/* Hide Resume Link in Full-Screen */}
        </div>

        {/* Main Content Column */}
        <div className="flex-1 bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-1 relative flex justify-center items-center">
          
          {/* Avatar Section */}
          <div className="flex flex-col items-center w-full max-w-screen-xl">
            <Avatar
              src="public/akhil.jpg"
              className="avatar-custom w-40 h-40 lg:w-50 lg:h-48 mb-6"
            />
            {/* Enhanced Text Section */}
            <div className="max-w-2xl mx-auto p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md text-center lg:text-left">
              <span className="inline-block text-4xl font-handwritten bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-text-gradient">
                👋 Hey, I'm Akhil
              </span>
              <p className="text-gray-700 text-lg leading-relaxed font-casual animate-fade-in-up" style={{ fontFamily: 'Poppins, sans-serif' }}>
                I'm a full-stack dev who loves building stuff that lives on the internet. 
                My playground includes everything from crafting smooth UI experiences with 
                React ⚛️ to wrestling with backend dragons in Node.js 🐉. Currently obsessed with:
                <Header/>
              </p>

              <div className="mt-4 flex flex-wrap gap-2 justify-center animate-staggered-pop">
                {/* Skills badges here */}
              </div>

              <Button
                className="mt-6 bg-white text-black border-2 border-black py-2 px-6 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:border-red-500 hover:-rotate-3 transition-all duration-300"
                onClick={showProjectDrawer}
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  borderRadius: '12px',
                  boxShadow: '8px 8px 0px black',
                }}
              >
                <span className="inline-block hover:scale-105 transition-transform">
                  VIEW PROJECTS! 🚀
                </span>
              </Button>

              {/* Resume Link Section */}
              {/* <Resume resumeLink={resumeLink} className="lg:hidden" /> */}

              {/* Animated Social Icons */}
              <div className="flex items-center mt-4 space-x-6 justify-center lg:justify-start">
                <GithubOutlined className="text-3xl text-gray-600 hover:text-gray-900 hover:scale-125 transition-transform cursor-pointer" />
                <LinkedinOutlined className="text-3xl text-gray-500 hover:text-gray-900 hover:scale-125 transition-transform cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Drawer with Animation */}
      <Drawer 
        title="My Cool Projects 🎨" 
        placement="right" 
        onClose={closeProjectDrawer} 
        open={projectDrawerVisible} 
        width={500}
        className="project-drawer"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              title={project.name} 
              extra={<a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">🔗 View</a>} 
              hoverable
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <p className="font-casual">{project.description}</p>
            </Card>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default AvatarCustomStyles;
