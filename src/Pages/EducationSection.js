import React from 'react';
import EducationCard from '../Components/EducationCard';
import Headings from '../Components/Heading';
import headings from '../Data/Headings';
import educationData from '../Data/EducationData';
import '../Components/css/EducationCard.css'

function EducationSection() {
    return (
        <div style={{paddingTop: "100px"}} className="container" id="education">
            <Headings
                key={headings[0].id}
                title={headings[0].title}
                subTitle={headings[0].subTitle}
            />
            <div className="row">
                {
                    educationData.map(function (value) {
                        return (
                            <EducationCard
                                key={value.id}
                                institution={value.institution}
                                type={value.type}
                                year={value.year}
                                score={value.score}
                                imageSrc={value.imageSrc}
                                imageAlt={value.imageAlt}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default EducationSection;