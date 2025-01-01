import React, { useEffect, useRef, useState } from 'react';
import '../style/WindowsComponent.css'; // Assuming you have some CSS for styling

const Window = ({ windowId, title, onClose, children }) => {
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
            X
          </button>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Window;