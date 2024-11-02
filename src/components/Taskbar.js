import React, { useState, useEffect } from 'react';
import '../style/Taskbar.css';
import win98StartMenuImage from '../images/Win98StartMenu.webp';
import Win98Volume from '../images/Win98Volume.png';
import sidebar95 from '../images/sidebar95.png';
import Meeaadheadshot from '../images/Meeaadheadshot.jpg';
import linkedinlogo from '../images/linkedinlogo.jpg';
import Resumeicon from '../images/Resumeicon.png';
import Github from '../images/Github.png';
import Aboutme from '../images/Aboutme.png';
import AboutMeContent from './AboutMeContent';
import Gmail from '../images/Gmail.png';

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [AboutMeOpen, setAboutMeOpen] = useState(false); // Corrected variable name

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

const toggleAboutMe = () => {
  setAboutMeOpen(!AboutMeOpen);
};
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="taskbar">
      <button className="button-start-menu" onClick={toggleStartMenu}>
        <img src={win98StartMenuImage} alt="Start Menu Icon" /> Start
      </button>
      {startMenuOpen && (
            <div className="menu">
             <div className="menusidebar">
              <img src={sidebar95} />
              </div>
             <div className="menulist">
              <ul>
                <li><img src={linkedinlogo} alt="LinkedIn Logo"/><a href="https://www.linkedin.com/in/meeaadbharoochi/" target="_blank">LinkedIn</a></li>
                <li onClick={toggleAboutMe}><img src={Aboutme} alt="About me"/>About Me</li>
                <li><img src={Resumeicon} alt="Resume icon"/><a href="Resume.pdf" target="_blank">Resume</a></li>
                <li><img src={Github} alt="Github icon"/><a href="https://github.com/Meeaad021" target="_blank">Github</a></li>
                <li><a href="mailto:meeaadbharoochi@gmail.com"><img src={Gmail} alt="Gmail icon"/>Gmail</a></li>
              </ul>
              </div>
            </div>
      )}
      {AboutMeOpen && (
  <AboutMeContent
    windowId="about-me-window"
    title="About Me"
    files={[ /* Example file data can be structured like this */ 
      { type: 'file', title: 'My Resume' },
      { type: 'folder', title: 'Projects' }
    ]}
    onClose={toggleAboutMe} // Pass the toggle function to close the window
  />
)}
      <div className="taskbar-divider"></div>
      <div className="tasks">
        <img src={Win98Volume} alt="Volume Icon" className="small-image volume-icon" />
        <div className="taskbar-time">
          {currentTime.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
