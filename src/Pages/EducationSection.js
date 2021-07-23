import React from 'react';
import EducationCard from '../Components/EducationCard';
import Headings from '../Components/Heading';
import headings from '../Data/Headings';
import educationData from '../Data/EducationData';
import '../Components/css/EducationCard.css'

function EducationSection() {
    return (
        <div className="container my-5 pt-5" id="education">
            <Headings
                title={headings[0].title}
                subTitle={headings[0].subTitle}
            />
            <div className="row">
                {
                    educationData.map(function(value) {
                        return (
                            <EducationCard
                                institution={value.institution}
                                type={value.type}
                                year={value.year}
                                score={value.score}
                                imageSrc={value.imageSrc}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default EducationSection;