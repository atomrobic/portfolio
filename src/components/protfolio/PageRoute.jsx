import React from 'react';
import Navbar from './Navbar';

const Page = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="section">
        <h1>Home Section</h1>
      </section>
      <section id="about" className="section">
        <h1>About Section</h1>
      </section>
      <section id="Projects" className="section">
        <h1>Projects Section</h1>
      </section>
      <section id="contact" className="section">
        <h1>Contact Section</h1>
      </section>
    </>
  );
};

export default Page;
