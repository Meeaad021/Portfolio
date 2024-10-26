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
        {files && files.length > 0 ? (
          files.map((file, index) => (
            <div key={index} className="file">
              {file.type === 'folder' ? (
                <img src="/path/to/folder/icon.png" alt="folder icon" />
              ) : (
                <img src="/path/to/file/icon.png" alt="file icon" />
              )}
              <span>{file.title}</span>
            </div>
          ))
        ) : (
          <p>No files to display.</p>
        )}
        <div className="about-me-text">
          <p>
          I am a BCom General graduate with a diverse skill set, I bring a creative and strategic mindset, a passion for engaging audiences, and a drive for continuous improvement. Let's connect to explore how my skills and experiences can contribute to your team's success, and together, we can create remarkable experiences for your audience.
          </p>
        </div>
        <img src={Aboutmegradpic} alt="Meeaad Bharoochi Grad Pic" className="about-me-pic" />
      </div>
    </div>
  );
};

export default AboutMeContent;
