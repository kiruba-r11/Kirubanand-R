import React from 'react';
import ConnectSection from './Pages/ConnectSection';
import NavBar from './Components/NavBar';
import AboutSection from './Pages/AboutSection';
import EducationSection from './Pages/EducationSection';
import ProjectsSection from './Pages/ProjectsSection';
import SkillsSection from './Pages/SkillsSection';

function App() {
    return (
        <>
            <NavBar />
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <ConnectSection />
        </>
    );
}

export default App;