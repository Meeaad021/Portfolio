import React, { useState } from 'react';
import '../style/Desktop.css';
import Taskbar from '../components/Taskbar';
import Skills from '../components/Skills';
import ClippyComponent from '../components/Clippy';
import Mycomputer from '../images/Mycomputer.png';
import Edge from '../images/Edge.png';
import CloseIcon from '../images/Closeicon.png';
import Window from '../components/WindowsComponent';

const Desktop = () => {

    const [isMyComputerOpen, setIsMyComputerOpen] = useState(false);

    // Function to open the My Computer window
    const openMyComputer = () => {
        setIsMyComputerOpen(true);
    };

    // Function to close the My Computer window
    const closeMyComputer = () => {
        setIsMyComputerOpen(false);
    };


    return (
        <div className="desktop-container">
            <div className="clippy-container">
                <ClippyComponent />
            </div>
            <div className="my-computer-icon-container"><img src={Mycomputer} alt="Open My Computer" className="my-computer-icon" onClick={openMyComputer}/>
                         </div>            {/* Render the My Computer window if it's open */}
                <Taskbar />
        </div>
    );
};

export default Desktop;
