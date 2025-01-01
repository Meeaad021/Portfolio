import React from 'react';
import Window from './WindowsComponent.js';
import '../style/AboutMeContent.css';
import Aboutmegradpic from '../images/Aboutmegradpic.jpg';
import PropTypes from 'prop-types';


const AboutMeContent = ({ windowId, title, onClose }) => {
  return (
    <Window windowId={windowId} title={title} onClose={onClose}>
      <img src={Aboutmegradpic} alt="Meeaad Bharoochi Grad Pic" className="about-me-pic" />
      <div className="about-me-text">
        <p>
          I'm a data enthusiast with a flair for storytelling and a knack for strategic thinking! After earning my Bachelor of Commerce from the University of the Western Cape, I dived into roles that let me explore my love for all things data, creativity, and problem-solving.
          <br /><br />
          Right now, I'm a Junior Data Processing Executive at Opinium, where I get to roll up my sleeves with data, ensuring every detail is on point. Previously, at Silo, I got to work some magic by automating data-capture processes, boosting efficiency, and building snazzy dashboards in Power BI that turned error patterns into actionable insights.
          <br /><br />
          My background as a Content Creator at DURPRO and Sales Promoter at XP SQUARED taught me the power of captivating narratives and strategy-driven results. Oh, and thanks to Amazon, I can handle customer queries with patience and a dash of finesse.
          <br /><br />
          With a passion for efficiency, a dash of creativity, and an eagerness to take on new challenges, I'm here to make an impact wherever data, strategy, and a bit of fun can meet!
        </p>
        <br /><br />
      </div>
    </Window>
  );
};

AboutMeContent.propTypes = {
  windowId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AboutMeContent;