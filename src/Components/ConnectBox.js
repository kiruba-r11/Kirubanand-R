import React from 'react';

function ConnectBox() {
    return (
        <div>
            <h4 className="mb-5">Ping Me Anytime! I'm always open for a new conversation...</h4>
            <div className="d-flex justify-content-center">
                <a target="__blank" href="https://github.com/kiruba-r11" className="nav-link mx-2"><i style={{ fontSize: "3rem" }} className="fab fa-github"></i></a>
                <a target="__blank" href="https://www.linkedin.com/in/kirubanand-r-2008271aa/" className="nav-link mx-2"><i style={{ fontSize: "3rem" }} className="fab fa-linkedin-in"></i></a>
                <a target="__blank" href="https://www.hackerrank.com/prdkiruba" className="nav-link mx-2"><i style={{ fontSize: "3rem" }} className="fab fa-hackerrank"></i></a>
                <a target="__blank" href="mailto:19cs121@psgitech.ac.in" className="nav-link mx-2"><i style={{ fontSize: "3rem" }} className="far fa-envelope"></i></a>
            </div>
        </div>
    );
}

export default ConnectBox;