import React from 'react';
import NavBar from './Components/NavBar';
import AboutSection from './Pages/AboutSection';
import EducationSection from './Pages/EducationSection';
import SkillsSection from './Pages/SkillsSection';

function App() {
    return (
        <>
            <NavBar/>
            <AboutSection />
            <EducationSection />
            <SkillsSection />
        </>
    );
}

export default App;