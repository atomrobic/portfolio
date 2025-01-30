import React from "react";
import './App.css';
import Header from './components/protfolio/Header';
// import About from "./components/protfolio/About";
import Contact from "./components/protfolio/Contact";
import Skills from "./components/protfolio/resume";
import { Drawer } from "@mui/material";
import AvatarCustomStyles from "./components/protfolio/Avatar";
import Projects from "./components/protfolio/Projects";

const App = () => {
  return (
    <>
      <div className="container">
        {/* <Header/> */}
        <AvatarCustomStyles /> {/* Display the avatar here */}

        {/* Hide Projects component on mobile view */}
        <div className="hidden lg:block">
          <Projects />
          <Skills />
        </div>

        {/* Center the Contact component using Tailwind */}
        <div className="flex justify-center items-center py-8">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
