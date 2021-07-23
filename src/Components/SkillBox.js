import React from 'react';
import './css/SkillBox.css'

function SkillBox(props) {

    return (
        <div className="skill-box">
            <img className="skill-logo" src={props.imageSrc} alt="skill-logo"/>
            <h3 className="skill-text">{props.name}</h3>
        </div>
    );
}

export default SkillBox;