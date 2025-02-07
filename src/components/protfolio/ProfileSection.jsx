import React, { useState } from 'react';
import { Button, Avatar, Popover, Spin, Progress, Slider } from 'antd';
import { GithubOutlined, LinkedinOutlined, DownOutlined, PhoneOutlined } from '@ant-design/icons';
import '../../styles/main.css';

const AvatarCustomStyles = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const resumeLink = 'public/Akhil.a...pdf';

  const handleDownloadClick = () => {
    setLoading(true);
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 5;
        setProgress(currentProgress);
      } else {
        clearInterval(progressInterval);
        setLoading(false);
        const link = document.createElement('a');
        link.href = resumeLink;
        link.download = 'Akhil_Resume.pdf';
        link.click();
      }
    }, 100);
  };

  const content = (
    <div>
      <button
        onClick={handleDownloadClick}
        className="bg-transparent text-black border-0 cursor-pointer hover:text-purple-600"
      >
        {loading ? (
          <>
            <Spin size="small" /> Downloading...
            <Progress percent={progress} size="small" className="mt-2" />
          </>
        ) : (
          'Download Resume'
        )}
      </button>
      <div className="mt-4">
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-purple-600"
        >
          View Resume
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-4 bg-black text-white mb-3">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <div className="flex-1 bg-black p-1 relative flex justify-center items-center">
          <div className="flex flex-col items-center w-full max-w-screen-xl">
            <Popover title={<span className="casual-font">I am a Full Stack Developer</span>} trigger="hover">
              <Avatar
                src="/akhil.jpg"
                className="avatar-custom w-40 h-40 lg:w-50 lg:h-40 mb-6"
              />
            </Popover>

            <div className="max-w-2xl mx-auto p-4 bg-gray-800 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md text-center lg:text-left">
              <span className="inline-block text-4xl font-handwritten bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-text-gradient">
                👋 Hey, I'm Akhil
              </span>
              <p className="text-gray-300 text-lg leading-relaxed font-casual animate-fade-in-up">
                I am a tech enthusiast with a passion for creating innovative projects.
                I am committed to continuous learning and am eager to apply my skills
                in a dynamic role where I can contribute to cutting-edge technology and drive measurable results. ⚛️
              </p>

              <div className="mt-4 flex items-center space-x-6 justify-center">
                <a 
                  href="https://github.com/atomrobic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubOutlined className="text-3xl text-gray-400 hover:text-white hover:scale-125 transition-transform cursor-pointer" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/akhil-a-7186052b5/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinOutlined className="text-3xl text-gray-400 hover:text-white hover:scale-125 transition-transform cursor-pointer" />
                </a>
              </div>

              <div className="mt-8 flex justify-center">
                <Popover content={content} title="Resume Options" trigger="click">
                  <Button
                    className="bg-gray-900 text-white border-2 border-white py-2 px-6 hover:bg-gray-700 focus:outline-none hover:-rotate-3 transition-all duration-300 hover:text-white hover:bg-gradient-to-r from-purple-600 to-pink-600"
                    style={{
                      fontFamily: "'Comic Neue', cursive",
                      borderRadius: '12px',
                      boxShadow: '8px 8px 0px black',
                    }}
                  >
                    <span className="inline-block hover:scale-105 transition-transform">
                      VIEW RESUME! 🚀 <DownOutlined />
                    </span>
                  </Button>
                </Popover>
              </div>

              {/* Slider Section */}
              <div className="mt-8 p-4">
                <h2 className="text-base md:text-lg font-bold text-white mb-4 text-center">
                  Control Slider to Unlock Contact Info 🎚️
                </h2>
                <div className="w-full md:w-1/2 mx-auto">
                  <Slider
                    defaultValue={0}
                    max={100}
                    value={sliderValue}
                    onChange={setSliderValue}
                    tooltip={{ open: true }}
                  />
                </div>

                {sliderValue === 100 && (
                  <div className="flex justify-center mt-4">
                    <Button
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center justify-center"
                      aria-label="Contact"
                      onClick={() => setShowDetails(true)}
                    >
                      <PhoneOutlined />
                    </Button>
                  </div>
                )}

                {showDetails && (
                  <div className="text-green-400 text-sm md:text-lg mt-4 font-semibold space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-200">Email:</span>
                      <span className="text-white break-words">akhilappuyeroor@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-purple-200">Contact Number:</span>
                      <span className="text-white">9544552818</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCustomStyles;
