import React from 'react';
import NavBar from './Components/NavBar';
import AboutSection from './Pages/AboutSection';
import EducationSection from './Pages/EducationSection';
import ProjectsSection from './Pages/ProjectsSection';
import SkillsSection from './Pages/SkillsSection';

function App() {
    return (
        <>
            <NavBar/>
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
        </>
    );
}

export default App;