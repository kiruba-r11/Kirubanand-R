import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AboutSection from '../Pages/AboutSection';
import EducationSection from '../Pages/EducationSection';
import SkillsSection from '../Pages/SkillsSection';
import './css/NavBar.css'

function NavBar() {
    return (
        <Router>
            <Switch>
                <nav className="navbar navbar-expand-lg navbar-dark bg-light nav-bg-color-light">
                    <div className="container">
                        <HashLink to="/#" className="navbar-brand nav-text-color-light">Resume</HashLink>
                        <button data-bs-target="#portfolio-nav" data-bs-toggle="collapse" className="toggler navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="portfolio-nav">
                            <ul className="navbar-nav ms-auto">
                                <li className="mx-2 nav-item">
                                    <HashLink to="/#" className="nav-link  nav-text-color-light">About</HashLink>
                                </li>
                                <li className="mx-2 nav-item">
                                    <HashLink to="/#education" className="nav-link  nav-text-color-light">Education</HashLink>
                                </li>
                                <li className="mx-2 nav-item">
                                    <HashLink to="/#skills" className="nav-link  nav-text-color-light">Skills</HashLink>
                                </li>
                                <li className="mx-2 nav-item">
                                    <HashLink to="/#projects" className="nav-link  nav-text-color-light">Projects</HashLink>
                                </li>
                                <li className="mx-2 nav-item">
                                    <HashLink to="/#connect" className="nav-link  nav-text-color-light">Connect</HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Route path="/" component={AboutSection} exact></Route>
                <Route path="/education" component={EducationSection} exact></Route>
                <Route path="/skills" component={SkillsSection} exact></Route>
            </Switch>
        </Router>
    );
}

export default NavBar;

