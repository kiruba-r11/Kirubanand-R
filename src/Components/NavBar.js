import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
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
                        <NavHashLink to="/#" className="navbar-brand nav-text-color-light">Resume</NavHashLink>
                        <button data-bs-target="#portfolio-nav" data-bs-toggle="collapse" className="toggler navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="portfolio-nav">
                            <ul className="navbar-nav ms-auto">
                                <li className="mx-2 nav-item">
                                    <NavHashLink to="/" activeClassName="active" className="nav-link  nav-text-color-light">About</NavHashLink>
                                </li>
                                <li className="mx-2 nav-item">
                                    <NavHashLink to="/#education" activeClassName="active" className="nav-link  nav-text-color-light">Education</NavHashLink>
                                </li>
                                <li className="mx-2 nav-item">
                                    <NavHashLink to="/#skills" activeClassName="active" className="nav-link  nav-text-color-light">Skills</NavHashLink>
                                </li>
                                <li className="mx-2 nav-item">
                                    <NavHashLink to="/#projects" activeClassName="active" className="nav-link  nav-text-color-light">Projects</NavHashLink>
                                </li>
                                <li className="mx-2 nav-item">
                                    <NavHashLink to="/#connect" activeClassName="active" className="nav-link  nav-text-color-light">Connect</NavHashLink>
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

