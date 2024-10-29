import React, { useEffect, useRef, useState } from 'react';
import '../style/AboutMeContent.css';
import CloseIcon from '../images/Closeicon.png';
import Aboutmegradpic from '../images/Aboutmegradpic.jpg';

const AboutMeContent = ({ windowId, title, files, onClose }) => {
  const [position, setPosition] = useState({ x: 800, y: -500 });
  const [isDragging, setIsDragging] = useState(false);
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition((prev) => ({
          x: prev.x + e.movementX,
          y: prev.y + e.movementY,
        }));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      id={windowId}
      className="custom-window"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ref={windowRef}
    >
      <div className="top-bar" onMouseDown={handleMouseDown}>
        <div className="title">{title}</div>
        <div className="controls">
          <button className="close-button" onClick={onClose}>
            <img src={CloseIcon} alt="Close" className="close-button-icon" />
          </button>
        </div>
      </div>
      <div className="content">
      <img src={Aboutmegradpic} alt="Meeaad Bharoochi Grad Pic" className="about-me-pic" />
        <div className="about-me-text">
          <p>I'm a data enthusiast with a flair for storytelling and a knack for strategic thinking! After earning my Bachelor of Commerce from the University of the Western Cape, I dived into roles that let me explore my love for all things data, creativity, and problem-solving.
             <br></br><br></br>
             Right now, I'm a Junior Data Processing Executive at Opinium, where I get to roll up my sleeves with data, ensuring every detail is on point. Previously, at Silo, I got to work some magic by automating data-capture processes, boosting efficiency, and building snazzy dashboards in Power BI that turned error patterns into actionable insights.
             <br></br><br></br>
             My background as a Content Creator at DURPRO and Sales Promoter at XP SQUARED taught me the power of captivating narratives and strategy-driven results. Oh, and thanks to Amazon, I can handle customer queries with patience and a dash of finesse.
             <br></br><br></br>
             With a passion for efficiency, a dash of creativity, and an eagerness to take on new challenges, I'm here to make an impact wherever data, strategy, and a bit of fun can meet!          </p>
             <br></br><br></br>
        </div>

      </div>
    </div>
  );
};

export default AboutMeContent;
