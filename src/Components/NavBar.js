import React from 'react';
import './css/NavBar.css'

function NavBar() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-light nav-bg-color-light">
            <div className="container">
                <a href="/" className="navbar-brand nav-text-color-light">Resume</a>
                <button data-bs-target="#portfolio-nav" data-bs-toggle="collapse" className="toggler navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="portfolio-nav">
                    <ul className="navbar-nav ms-auto">
                        <li className="mx-2 nav-item">
                            <a href="/" className="nav-link  nav-text-color-light">About</a>
                        </li>
                        <li className="mx-2 nav-item">
                            <a href="/" className="nav-link  nav-text-color-light">Education</a>
                        </li>
                        <li className="mx-2 nav-item">
                            <a href="/" className="nav-link  nav-text-color-light">Skills</a>
                        </li>
                        <li className="mx-2 nav-item">
                            <a href="/" className="nav-link  nav-text-color-light">Projects</a>
                        </li>
                        <li className="mx-2 nav-item">
                            <a href="/" className="nav-link  nav-text-color-light">Connect</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

