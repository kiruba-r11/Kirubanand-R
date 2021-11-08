import React from 'react';
import './css/EducationCard.css'

function EducationCard(props) {

    return (
        <div className="col-lg-6">
            <div className="card mb-3">
                <div className="row g-2">
                    <div className="col-sm-4">
                        <img className="education-image" src={props.imageSrc} alt={props.imageAlt}/>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.institution}</h5>
                            <div className="d-flex justify-content-between">
                                <p className="card-text">{props.type}</p>
                                <p className="card-text">{props.year}</p>
                            </div>
                            <p><small>{props.score}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationCard;