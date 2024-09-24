import React, { useState } from 'react';
import '../style/AboutMeContent.css';
import CloseIcon from '../images/Closeicon.png';
import Aboutmegradpic from '../images/Aboutmegradpic.jpg';
import Python from '../images/Python.png';
import Javascript from '../images/Javascript.png';
import Typescript from '../images/Typescript.png';
import SQL from '../images/SQL.png';
import C from '../images/C.png';
import ReactIcon from '../images/ReactIcon.png';
import VueIcon from '../images/VueIcon.png';
import VSCodeIcon from '../images/VSCodeIcon.png';
import PyCharmIcon from '../images/PyCharmIcon.png';
import SublimeTextIcon from '../images/SublimeTextIcon.png';
import SeleniumIcon from '../images/SeleniumIcon.png';
import PandasIcon from '../images/PandasIcon.png';
import ExcelIcon from '../images/ExcelIcon.png';
import ETLProcessImage from '../images/ETLProcessImage.jpg';

const projects = [
    {
        name: "Project: ETL Process",
        summary: "The task was to create an ETL process that could save countless hours of product production time. Previously, manually capturing data for hundreds of products took approximately 5 minutes per product, totaling around 2500 minutes for 500 products. With the new automated process, the time was reduced to just 2 hours!",
        image: ETLProcessImage,
        githubLink: "https://github.com/project1"
    }
];

const AboutMeContent = ({ onClose }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;
    const [currentProject, setCurrentProject] = useState(0);

    const handleClose = () => {
        onClose();
    };

    const nextPage = () => {
        setCurrentPage(prevPage => (prevPage % totalPages) + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage === 1 ? totalPages : currentPage - 1);
    };

    const prevProject = () => {
        setCurrentProject(currentProject === 0 ? projects.length - 1 : currentProject - 1);
    };

    const nextProject = () => {
        setCurrentProject(currentProject === projects.length - 1 ? 0 : currentProject + 1);
    };

    return (
        <div className="about-me-container">
            <div className="title-bar">
                <div className="title-bar-text">About Me</div>
                <div className="title-bar-controls">
                    <button aria-label="Close" onClick={handleClose} className="windows-button">
                        <img src={CloseIcon} alt="Close" />
                    </button>
                </div>
            </div>
            <div className="about-me-content">
                <div className={`page${currentPage}`}>
                    {currentPage === 1 && (
                        <div>
                            <p>
                                As a BCom graduate with a major in Information Systems, I offer a diverse skill set, blending creativity,
                                strategic thinking, and a commitment to continuous improvement. Transitioning from content writing to data
                                capture, my primary aspiration is to excel in software development. My creative problem-solving and audience
                                engagement skills, combined with meticulous attention to detail, can add significant value to your company.
                            </p>
                            <img src={Aboutmegradpic} alt="Aboutmegradpic" className="Aboutmegradpic" />
                        </div>
                    )}
                    {currentPage === 2 && (
                        <div>
                            {/* Programming Languages */}
                            <div className="column">
                                <h3>Languages</h3>
                                <div className="Python">
                                    <img src={Python} alt="Python" className="Python-icon" />
                                    <span className="Python-text">Python</span>
                                </div>
                                <div className="Javascript">
                                    <img src={Javascript} alt="Javascript" className="Javascript-icon" />
                                    <span className="Javascript-text">JavaScript</span>
                                </div>
                                <div className="Typescript">
                                    <img src={Typescript} alt="Typescript" className="Typescript-icon" />
                                    <span className="Typescript-text">TypeScript</span>
                                </div>
                                <div className="SQL">
                                    <img src={SQL} alt="SQL" className="SQL-icon" />
                                    <span className="SQL-text">SQL</span>
                                </div>
                                <div className="CSharp">
                                    <img src={C} alt="C#" className="CSharp-icon" />
                                    <span className="CSharp-text">C#</span>
                                </div>
                            </div>

                            {/* Frameworks */}
                            <div className="column">
                                <h3>Frameworks</h3>
                                <div className="React">
                                    <img src={ReactIcon} alt="React" className="React-icon" />
                                    <span className="React-text">React</span>
                                </div>
                                <div className="Vue.js">
                                    <img src={VueIcon} alt="Vue.js" className="Vue-icon" />
                                    <span className="Vue-text">Vue.js</span>
                                </div>
                            </div>

                            {/* Environments */}
                            <div className="column">
                                <h3>Environments</h3>
                                <div className="VS Code">
                                    <img src={VSCodeIcon} alt="VS Code" className="VSCode-icon" />
                                    <span className="VSCode-text">VS Code</span>
                                </div>
                                <div className="PyCharm">
                                    <img src={PyCharmIcon} alt="PyCharm" className="PyCharm-icon" />
                                    <span className="PyCharm-text">PyCharm</span>
                                </div>
                                <div className="Sublime Text">
                                    <img src={SublimeTextIcon} alt="Sublime Text" className="SublimeText-icon" />
                                    <span className="SublimeText-text">Sublime Text</span>
                                </div>
                            </div>

                            {/* Tools */}
                            <div className="column">
                                <h3>Tools</h3>
                                <div className="Selenium">
                                    <img src={SeleniumIcon} alt="Selenium" className="Selenium-icon" />
                                    <span className="Selenium-text">Selenium</span>
                                </div>
                                <div className="Pandas">
                                    <img src={PandasIcon} alt="Pandas" className="Pandas-icon" />
                                    <span className="Pandas-text">Pandas</span>
                                </div>
                                <div className="MicrosoftExcel">
                                    <img src={ExcelIcon} alt="MicrosoftExcel" className="MicrosoftExcel-icon" />
                                    <span className="MicrosoftExcel-text">Microsoft Excel</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {currentPage === 3 && (
                        <div>
                            <div className="project-slider">
                                <img src={projects[currentProject].image} alt={projects[currentProject].name} />
                                <h2>{projects[currentProject].name}</h2>
                                <p>{projects[currentProject].summary}</p>
                                <a href={projects[currentProject].githubLink}>GitHub Link</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="navigation-buttons">
                <button className="btn" onClick={prevPage}>Previous Page</button>
                <button className="btn" onClick={nextPage}>Next Page</button>
            </div>
        </div>
    );
};

export default AboutMeContent;
