import React from 'react';
import Navbar from './Navbar';
import ProfileSection from './ProfileSection';
import Skills from './Skills';
import Projects from './Projects';
import EducationCard from './Education';
import Contact from './Contact';
import ExperienceCard from './ExperienceCard';
const Container = () => {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Layout */}
      <div className="min-h-screen bg-black text-white p-2">
        {/* Sidebar and Main Content */}
        <div className="flex flex-col lg:flex-row mt-8 gap-5">
          {/* Sidebar Section */}
          <aside className="bg-black-800 p-4 rounded-lg shadow-md w-full lg:w-4/ h-auto lg:h-auto">
            <ProfileSection />

            {/* Card Container Below Sidebar */}
            <div className="mt-6 bg-dark-700 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-4">My Projects</h3>
              <div className="grid grid-cols-1 gap-4">
                <Projects />
              </div>
            </div>
          </aside>

          {/* Main Content Section */}
          <main className="bg-gray-900 p-8 rounded-lg shadow-md w-full lg:w-8/12 h-auto lg:h-auto">
            {/* Projects Section */}
            <section className="mt-8">
             <ExperienceCard/>
            </section>

            {/* Skills Section */}
            <section className="mt-8">
              <div className="grid grid-cols-1 gap-4">
                <Skills />
              </div>
            </section>

            {/* Education Section */}
            <section className="mt-8  ">
              <EducationCard />
            </section>

            {/* New Section Below EducationCard */}
            <section className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">New Section</h3>
              <p className="text-gray-300">This is a new section that you can customize further. Add content like text, images, or even other components.</p>
              <div className="mt-4">
                <p className="text-gray-400">This section can be used to add any additional information, such as articles, a contact form, or links to social media.</p>
              </div>
            </section>
          </main>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white text-center py-4 rounded-lg shadow-md mt-8">
          <Contact />
        </footer>
      </div>
    </>
  );
};

export default Container;
